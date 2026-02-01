# This script adds Node.js to your user PATH permanently
$nodePath = "C:\Program Files\nodejs"
$currentPath = [Environment]::GetEnvironmentVariable("Path", "User")

if ($currentPath -notlike "*$nodePath*") {
    $newPath = $currentPath + ";" + $nodePath
    [Environment]::SetEnvironmentVariable("Path", $newPath, "User")
    Write-Host "Node.js has been added to your PATH!" -ForegroundColor Green
    Write-Host "Please restart your terminal for changes to take effect." -ForegroundColor Yellow
} else {
    Write-Host "Node.js is already in your PATH!" -ForegroundColor Green
}
