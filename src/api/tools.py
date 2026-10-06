"""Sandboxed Custom Tools execution API."""

import os
import re
import time
import asyncio
from typing import Any, Dict, List, Optional
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field

from src.core.config import config_manager


router = APIRouter(prefix="/api/v1/tools", tags=["Custom Tools"])

TOOL_FILENAME_REGEX = re.compile(r"^[a-zA-Z0-9_\-\.]+$")


class RunToolRequest(BaseModel):
    args: List[str] = Field(default_factory=list, description="Optional command-line arguments")


@router.get("")
async def list_custom_tools() -> List[Dict[str, Any]]:
    """List available custom diagnostic and maintenance tools in /config/custom_tools."""
    settings = await config_manager.get_settings()
    tools_dir = settings.custom_tools_path

    if not os.path.exists(tools_dir) or not os.path.isdir(tools_dir):
        return []

    tools: List[Dict[str, Any]] = []
    for fname in sorted(os.listdir(tools_dir)):
        fpath = os.path.join(tools_dir, fname)
        if not os.path.isfile(fpath):
            continue

        ext = os.path.splitext(fname)[1].lower()
        if ext not in [".sh", ".py", ".bash"]:
            continue

        # Extract title/description from comment header if available
        description = "Custom tool script"
        try:
            with open(fpath, "r", encoding="utf-8", errors="ignore") as f:
                for line in f:
                    line = line.strip()
                    if line.startswith("# Description:") or line.startswith("# description:"):
                        description = line.split(":", 1)[1].strip()
                        break
                    elif line.startswith("#") and len(line) > 2 and not line.startswith("#!"):
                        description = line.lstrip("#").strip()
                        break
        except Exception:
            pass

        stat = os.stat(fpath)
        is_executable = os.access(fpath, os.X_OK)

        tools.append({
            "name": fname,
            "path": fpath,
            "type": "python" if ext == ".py" else "shell",
            "description": description,
            "size_bytes": stat.st_size,
            "executable": is_executable,
        })

    return tools


@router.post("/{tool_name}/run")
async def run_custom_tool(tool_name: str, req: RunToolRequest = RunToolRequest()) -> Dict[str, Any]:
    """Execute a sandboxed custom tool inside the container and capture execution logs."""
    if not TOOL_FILENAME_REGEX.match(tool_name):
        raise HTTPException(status_code=400, detail="Invalid tool filename")

    settings = await config_manager.get_settings()
    tools_dir = settings.custom_tools_path
    fpath = os.path.join(tools_dir, tool_name)

    # Prevent traversal
    real_fpath = os.path.realpath(fpath)
    real_tools_dir = os.path.realpath(tools_dir)
    if not real_fpath.startswith(real_tools_dir) or not os.path.isfile(real_fpath):
        raise HTTPException(status_code=404, detail=f"Custom tool '{tool_name}' not found")

    ext = os.path.splitext(tool_name)[1].lower()
    if ext == ".py":
        cmd = ["python", real_fpath] + req.args
    elif ext in [".sh", ".bash"]:
        cmd = ["bash", real_fpath] + req.args
    else:
        cmd = [real_fpath] + req.args

    start_time = time.time()
    try:
        proc = await asyncio.create_subprocess_exec(
            *cmd,
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE,
            cwd=tools_dir,
        )
        try:
            stdout_data, stderr_data = await asyncio.wait_for(proc.communicate(), timeout=60.0)
        except asyncio.TimeoutError:
            proc.kill()
            await proc.wait()
            return {
                "success": False,
                "tool_name": tool_name,
                "exit_code": -1,
                "duration_ms": int((time.time() - start_time) * 1000),
                "error": "Execution timed out after 60 seconds",
                "stdout": "",
                "stderr": "Execution timed out after 60 seconds",
            }

        duration_ms = int((time.time() - start_time) * 1000)
        stdout_str = stdout_data.decode("utf-8", errors="replace")
        stderr_str = stderr_data.decode("utf-8", errors="replace")

        return {
            "success": proc.returncode == 0,
            "tool_name": tool_name,
            "exit_code": proc.returncode,
            "duration_ms": duration_ms,
            "stdout": stdout_str,
            "stderr": stderr_str,
        }
    except Exception as e:
        return {
            "success": False,
            "tool_name": tool_name,
            "exit_code": -1,
            "duration_ms": int((time.time() - start_time) * 1000),
            "error": str(e),
            "stdout": "",
            "stderr": str(e),
        }
