#!/bin/bash

#COMFYDIR & LISTENPORT are set in Dockerfile 

cd $COMFYDIR
python main.py --listen --port $LISTENPORT &
