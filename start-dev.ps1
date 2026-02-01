$env:Path += ";C:\Program Files\nodejs"
Set-Location "c:\Users\admat\Documents\claude-resume-site"
Write-Host "Starting Next.js development server..." -ForegroundColor Green
Write-Host "Open http://localhost:3000 in your browser" -ForegroundColor Cyan
npm run dev
