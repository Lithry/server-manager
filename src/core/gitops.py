"""GitOps read-only inspection for host repository."""

import os
import asyncio
from typing import Any, Dict


class GitOpsManager:
    def __init__(self, repo_path: str | None = None):
        self.repo_path = repo_path or os.getenv("REPO_PATH", "/repo")

    async def get_status(self) -> Dict[str, Any]:
        if not os.path.exists(self.repo_path) or not os.path.isdir(self.repo_path):
            return {
                "mounted": False,
                "path": self.repo_path,
                "error": "Repository path not mounted or does not exist",
                "commit": "unknown",
                "branch": "unknown",
                "clean": True,
            }

        git_dir = os.path.join(self.repo_path, ".git")
        if not os.path.exists(git_dir):
            return {
                "mounted": True,
                "path": self.repo_path,
                "error": "Directory is not a Git repository",
                "commit": "unknown",
                "branch": "unknown",
                "clean": True,
            }

        try:
            # Get current commit hash
            commit_proc = await asyncio.create_subprocess_exec(
                "git", "-c", "safe.directory=*", "-C", self.repo_path, "rev-parse", "HEAD",
                stdout=asyncio.subprocess.PIPE,
                stderr=asyncio.subprocess.PIPE,
            )
            commit_out, _ = await commit_proc.communicate()
            commit = commit_out.decode().strip() if commit_proc.returncode == 0 else "unknown"

            # Get current branch
            branch_proc = await asyncio.create_subprocess_exec(
                "git", "-c", "safe.directory=*", "-C", self.repo_path, "branch", "--show-current",
                stdout=asyncio.subprocess.PIPE,
                stderr=asyncio.subprocess.PIPE,
            )
            branch_out, _ = await branch_proc.communicate()
            branch = branch_out.decode().strip() if branch_proc.returncode == 0 else "unknown"

            # Get commit subject
            log_proc = await asyncio.create_subprocess_exec(
                "git", "-c", "safe.directory=*", "-C", self.repo_path, "log", "-1", "--format=%s (%cd)", "--date=relative",
                stdout=asyncio.subprocess.PIPE,
                stderr=asyncio.subprocess.PIPE,
            )
            log_out, _ = await log_proc.communicate()
            last_commit_info = log_out.decode().strip() if log_proc.returncode == 0 else ""

            # Check dirty status
            status_proc = await asyncio.create_subprocess_exec(
                "git", "-c", "safe.directory=*", "-C", self.repo_path, "status", "--porcelain",
                stdout=asyncio.subprocess.PIPE,
                stderr=asyncio.subprocess.PIPE,
            )
            status_out, _ = await status_proc.communicate()
            dirty_files = [f.strip() for f in status_out.decode().splitlines() if f.strip()]

            return {
                "mounted": True,
                "path": self.repo_path,
                "commit": commit,
                "short_commit": commit[:7] if commit != "unknown" else "unknown",
                "branch": branch or "detached",
                "last_commit": last_commit_info,
                "clean": len(dirty_files) == 0,
                "dirty_files": dirty_files,
                "error": None,
            }
        except Exception as e:
            return {
                "mounted": True,
                "path": self.repo_path,
                "error": str(e),
                "commit": "unknown",
                "branch": "unknown",
                "clean": True,
            }


gitops_manager = GitOpsManager()
