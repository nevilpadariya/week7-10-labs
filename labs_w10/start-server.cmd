@echo off
REM Start a simple Python HTTP server for Week 10 Accessibility Lab
REM Usage: double-click start-server.cmd
echo Starting local server at http://localhost:8080 ...
python -m http.server 8080
pause
