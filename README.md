# comfyui-flux_runpod
ComfyUI with Flux model to run on Runpod.io

## Files
| File | Puropse |
| --- | --- |
| Dockerfile | Build instructions for the Docker container |
| README.md | This file |
| defaultGraph.js | The default workflow. To make a new one, save your current workflow, then change the first line to "export const defaultGraph = {" |
| dl_flux_model.sh | Bash shell to download files for the Flux model. Didn't want to download the models everytime I built an image (they're huge, and my internet is _meh_), so I use this to download the files once then copy them when the image is built. |
| models.sha256 | sha256 sums of the models to make sure they weren't corrupted during the download. (Did I mention my internet is _meh_.) |
| post_start.sh | Used my Runpod.io as part of a container's startup. |

## Support
There isn't any.

Okay, that was rude of me, but to be completely candid I built this for me to fit my needs. If you can use it, great! If you want to make a change so it can fit your needs better, go ahead. If you have a question, you can ask, but I may not have the time or knowledge to answer. Remember: The key to happiness is low expectations.

## Changelog
2024.08.09: Initial build with flux1-dev-fp8 model.
