#!/bin/bash

#BASEDIR="/usr/local/src"
#COMFYDIR="$BASEDIR/ComfyUI"

cd $COMFYDIR
python main.py --listen --port $LISTENPORT &
