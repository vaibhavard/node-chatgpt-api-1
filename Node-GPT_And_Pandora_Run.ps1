$envVars = Get-Content -Path ".\\.env" | ConvertFrom-StringData

$pandoraPath = $envVars.PANDORA_PATH
$nodePath = $envVars.NODE_GPT_PATH

Start-Process -FilePath 'powershell.exe' -ArgumentList "-command `"npm run preview`"" -WorkingDirectory $pandoraPath -WindowStyle 'Hidden'
Start-Process -FilePath 'powershell.exe' -ArgumentList "-command `"npm run start`"" -WorkingDirectory $nodePath -WindowStyle 'Hidden'