@echo off
rem AAAAAAAAAAAAAAAaaaa
rem aaaaAAAAAAaaaaaa
rem AAAAAA
rem this exists because obviously bun's install 
set arg1=%1
set arg2=%2
if exist "%BUN_INSTALL%" GOTO run
GOTO install

:install
powershell -c "irm bun.sh/install.ps1 | iex"
SET /p BUN_INSTALL="C:\Users\o2591700\.bun\bin\bun.exe"

:run
"C:\Users\o2591700\.bun\bin\bun.exe" %arg1% %arg2%