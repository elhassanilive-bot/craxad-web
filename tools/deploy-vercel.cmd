@echo off
setlocal EnableExtensions EnableDelayedExpansion

cd /d "%~dp0\.."

set "COMMIT_MSG=%~1"
if not defined COMMIT_MSG set "COMMIT_MSG=Update Craxad website"

for /f "delims=" %%i in ('git branch --show-current') do set "BRANCH=%%i"
if not defined BRANCH set "BRANCH=master"

echo.
echo [1/5] Running lint...
call npm.cmd run lint
if errorlevel 1 (
  echo.
  echo Lint failed. Fix the errors, then run this script again.
  exit /b 1
)

echo.
echo [2/5] Staging changes...
git add .
if errorlevel 1 (
  echo.
  echo Failed to stage files.
  exit /b 1
)

echo.
echo [3/5] Creating commit when needed...
git diff --cached --quiet
if errorlevel 1 (
  git commit -m "%COMMIT_MSG%"
  if errorlevel 1 (
    echo.
    echo Commit failed.
    exit /b 1
  )
) else (
  echo No new staged changes to commit.
)

echo.
echo [4/5] Pushing to origin/%BRANCH% ...
git push origin %BRANCH%
if errorlevel 1 (
  echo.
  echo Push failed.
  exit /b 1
)

echo.
echo [5/5] Deploying to Vercel...
where vercel.cmd >nul 2>nul
if errorlevel 1 (
  echo.
  echo vercel.cmd was not found.
  echo Install it with: npm install -g vercel
  exit /b 1
)

call vercel.cmd --prod
if errorlevel 1 (
  echo.
  echo Vercel deployment failed.
  exit /b 1
)

echo.
echo Deployment completed successfully.
echo Project URL: https://craxad-web.vercel.app
exit /b 0
