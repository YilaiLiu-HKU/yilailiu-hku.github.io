$ErrorActionPreference = "Stop"

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
$imagesDir = Join-Path $repoRoot "images"
$updateScript = Join-Path $PSScriptRoot "update_pdf_previews.ps1"

& $updateScript -ImagesDir $imagesDir

$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path = $imagesDir
$watcher.Filter = "*.pdf"
$watcher.IncludeSubdirectories = $false
$watcher.EnableRaisingEvents = $true

$action = {
  Start-Sleep -Milliseconds 300
  & $using:updateScript -ImagesDir $using:imagesDir
}

$events = @(
  Register-ObjectEvent $watcher Changed -Action $action
  Register-ObjectEvent $watcher Created -Action $action
  Register-ObjectEvent $watcher Renamed -Action $action
)

try {
  $env:PATH = "D:\\Ruby34\\bin;$env:PATH"
  Set-Location $repoRoot
  & "D:\\Ruby34\\bin\\bundle.bat" exec ruby -S jekyll serve --host 127.0.0.1 --port 4000
}
finally {
  foreach ($event in $events) {
    Unregister-Event -SourceIdentifier $event.Name -ErrorAction SilentlyContinue
  }
  $watcher.Dispose()
}
