FROM python:3.12-slim

# Prevent Python from writing .pyc files and enable unbuffered logging
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    DEBIAN_FRONTEND=noninteractive

WORKDIR /app

# Install system dependencies (curl for healthchecks, procps)
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    procps \
    git \
    && rm -rf /var/lib/apt/lists/*

# Install Python requirements
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy source code and static web assets
COPY src/ ./src/

# Create persistent data and custom tools mount directories
RUN mkdir -p /data /config/custom_tools /host/proc /repo

# Environment defaults
ENV PUID=1000 \
    PGID=1000 \
    UMASK=002 \
    TZ=America/Argentina/Buenos_Aires \
    PORT=8099 \
    DB_PATH=/data/server_manager.db \
    SETTINGS_PATH=/data/settings.json

EXPOSE 8099

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD curl -f http://localhost:8099/health || exit 1

CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8099"]
