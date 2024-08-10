#!/usr/bin/env bash
DEST_DIR=./models
HF_TOKEN="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"  #It's read-only. Don't get excited.

[ ! -d "./models/checkpoints" ] && mkdir -p ./models/checkpoints
[ ! -d "./models/clip" ] && mkdir -p ./models/clip
[ ! -d "./models/vae" ] && mkdir -p ./models/vae

#cd $DEST_DIR
#wget -c https://huggingface.co/Kijai/flux-fp8/resolve/main/flux1-dev-fp8.safetensors -P ./models/checkpoints/
wget -c https://huggingface.co/Comfy-Org/flux1-dev/resolve/main/flux1-dev-fp8.safetensors --header="Authorization: Bearer $HF_TOKEN" -P ./models/checkpoints/
wget -c https://huggingface.co/comfyanonymous/flux_text_encoders/resolve/main/clip_l.safetensors -P ./models/clip/
#wget -c https://huggingface.co/comfyanonymous/flux_text_encoders/resolve/main/t5xxl_fp16.safetensors -P ./models/clip/
wget -c https://huggingface.co/comfyanonymous/flux_text_encoders/resolve/main/t5xxl_fp8_e4m3fn.safetensors -P ./models/clip/
wget -c https://huggingface.co/black-forest-labs/FLUX.1-dev/resolve/main/ae.safetensors --header="Authorization: Bearer $HF_TOKEN" -P ./models/vae
