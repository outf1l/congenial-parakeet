@echo off
title Deleting MAX...
taskkill /f /im max.exe
taskkill /f /im call-service.exe
del %userprofile%\Desktop\MAX.lnk
del C:\Users\Public\Desktop\MAX.lnk
del "%appdata%\Microsoft\Windows\Start Menu\Programs\MAX\*" /f /s /q
rmdir "%appdata%\Microsoft\Windows\Start Menu\Programs\MAX" /s /q
timeout 8
takeown /f "C:\Program Files\MAX" /r /d Y
icacls "C:\Program Files\MAX" /t /c /grant %username%:(f)
del "C:\Program Files\MAX\*" /f /s /q
del "C:\Program Files\MAX\call-service\*" /f /s /q
del "C:\Program Files\MAX\qml\*" /f /s /q
del "C:\Program Files\MAX\plugins\*" /f /s /q
del "C:\Program Files\MAX\resources\*" /f /s /q
del "C:\Program Files\MAX\translations\*" /f /s /q
del "%localappdata%\max\*" /f /s /q
rmdir "C:\Program Files\MAX" /s /q
reg delete HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\{348EFF2A-7ED7-446C-B2A4-49D724C717A8} /va /f
reg delete "HKCU\Software\Communication Platform" /va /f
reg delete "HKCU\Software\Communication Platform LLC" /va /f
echo Messenger MAX has been deleted on this system.
pause