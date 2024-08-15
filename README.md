# comfyui-flux_runpod
ComfyUI with Flux model to run on Runpod.io

## Files
| File | Puropse |
| --- | --- |
| Dockerfile | Build instructions for the Docker image |
| README.md | This file |
| defaultGraph.js | The default workflow. To make a new one, save your current workflow, then change the first line to ```export const defaultGraph = {``` |
| dl_flux_model.sh | Bash shell to download files for the Flux model. Didn't want to download the models everytime I built an image (they're huge, and my internet is _meh_), so I use this to download the files once then copy them when the image is built. |
| models.sha256 | sha256 sums of the models to make sure they weren't corrupted during the download. (Did I mention my internet is _meh_.) |
| post_start.sh | Used by Runpod.io as part of a container's startup. |

## Support
There isn't any.

Okay, that was rude of me, but to be completely candid I built this for me to fit my needs. If you can use it, great! If you want to make a change so it can fit your needs better, go ahead. If you have a question, you can ask, but I may not have the time or knowledge to answer. Remember: The key to happiness is low expectations.

## To-do
- Add img2img support
- Add inpainting

## Changelog
| Date | Tag | Description |
| --- | --- | --- |
| ??? | v 1.2-dev | Cleaned up unused ports in Dockerfile. Changed checkpoint model to _flux1-dev-bnb-nf4-v2_. |
| 2024.08.10 | v1.1 | Changed default workflow to ["flux_dev_checkpoint_example"](https://raw.githubusercontent.com/comfyanonymous/ComfyUI_examples/master/flux/flux_dev_checkpoint_example.png). Moved flux1-dev-fp8.safetensors from _unet_ to _checkpoints_. Replaced flux1-dev-fp8.safetensors with [model from Comfy-Org](https://huggingface.co/Comfy-Org/flux1-dev/blob/main/flux1-dev-fp8.safetensors). Added "To-do" section to README.md |
| 2024.08.09 | v1 | Initial build with flux1-dev-fp8 model. |
