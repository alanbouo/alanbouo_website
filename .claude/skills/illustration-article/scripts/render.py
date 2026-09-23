#!/usr/bin/env python3
"""Rend une planche .dc.html en PNG aux dimensions exactes, via Chrome headless.

Usage : render.py <planche.dc.html> <largeur> <hauteur> <sortie.png>

Chrome headless réserve une partie de la fenêtre à son interface : on rend
dans une fenêtre plus haute que la planche, puis on recadre en haut à gauche.
Le budget de temps virtuel laisse aux polices Google le temps de charger.
"""
import subprocess, sys, tempfile, os
from PIL import Image

CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
MARGE = 300

src, w, h, out = sys.argv[1], int(sys.argv[2]), int(sys.argv[3]), sys.argv[4]
with tempfile.TemporaryDirectory() as tmp:
    brut = os.path.join(tmp, "brut.png")
    subprocess.run([
        CHROME, "--headless=new", "--disable-gpu", "--hide-scrollbars",
        f"--window-size={w},{h + MARGE}", "--virtual-time-budget=5000",
        f"--screenshot={brut}", "file://" + os.path.abspath(src),
    ], check=True, stderr=subprocess.DEVNULL, stdout=subprocess.DEVNULL)
    Image.open(brut).crop((0, 0, w, h)).convert("RGB").save(out)
print(out)
