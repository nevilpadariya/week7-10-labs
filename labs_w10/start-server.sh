#!/bin/bash
# Start a simple Python HTTP server for Week 10 Accessibility Lab
# Usage: ./start-server.sh
echo "Starting local server at http://localhost:8080 ..."
python3 -m http.server 8080
