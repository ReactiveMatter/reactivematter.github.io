---
title: 'Ubuntu fullscreen mode in Virtual Box'
layout: blog
date: 2025-04-02
topic: coding
---

For the past few days, I have trying to use Ubuntu in Virtual Box in full screen mode. After lot of attempts, this is the solution that worked:

- Install Ubuntu (or any Ubuntu based distro) in Virtual Box.
- In settings, enable 3D acceleration and set Video Memory to highest (128M).
- After installing Ubuntu, from Virtual Box Menu Bar go to devices and select Insert Guest Additions CD image. It will be loaded as Optical Disk in the VM.
- Then run `sudo ./autorun.sh`. After the installation of these tools, restart the VM.

It seems (based on internet research), in Virtual Box 1.7.6, full screen cannot be attained until 3D acceleration is enabled.