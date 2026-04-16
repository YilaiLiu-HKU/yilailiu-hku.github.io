param(
  [string]$ImagesDir = (Join-Path $PSScriptRoot "..\\images")
)

$ErrorActionPreference = "Stop"

function Get-PdfToPpm {
  $cmd = Get-Command pdftoppm -ErrorAction SilentlyContinue
  if ($cmd) { return $cmd.Source }

  $fallback = "E:\\CTEX\\MiKTeX\\miktex\\bin\\x64\\pdftoppm.exe"
  if (Test-Path $fallback) { return $fallback }

  throw "pdftoppm not found."
}

function Update-Preview([string]$PdfPath, [string]$PdfToPpm) {
  if (-not (Test-Path $PdfPath)) { return }

  $baseName = [System.IO.Path]::GetFileNameWithoutExtension($PdfPath)
  $outputPrefix = Join-Path ([System.IO.Path]::GetDirectoryName($PdfPath)) ($baseName + "-preview")

  & $PdfToPpm -png -cropbox -f 1 -singlefile $PdfPath $outputPrefix | Out-Null
  Write-Host "Updated preview for $baseName"
}

$pdfToPpm = Get-PdfToPpm
Get-ChildItem -LiteralPath $ImagesDir -Filter *.pdf -File | ForEach-Object {
  Update-Preview -PdfPath $_.FullName -PdfToPpm $pdfToPpm
}
