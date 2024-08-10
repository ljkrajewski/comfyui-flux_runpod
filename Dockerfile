### Filename: Dockerfile
FROM runpod/pytorch:2.1.1-py3.10-cuda12.1.1-devel-ubuntu22.04
ENV BASEDIR=/usr/local/src
ENV COMFYDIR=$BASEDIR/ComfyUI
ENV LISTENPORT=8818

# Update image, install tools, & download ComfyUI from Github
WORKDIR $BASEDIR
RUN apt update && apt upgrade -y && apt install git curl wget vim tmux python3 python3-pip -y && \
    python -m pip install --upgrade pip && \
    git clone https://github.com/comfyanonymous/ComfyUI.git && \
    pip install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cu121 && \
    pip install -r $COMFYDIR/requirements.txt
  
# Copy models & default workflow
WORKDIR $COMFYDIR
COPY models/ models
COPY defaultGraph.js web/scripts/
COPY --chmod=755 post_start.sh /
 
WORKDIR $COMFYDIR/custom_nodes 
RUN git clone https://github.com/ltdrdata/ComfyUI-Manager.git

EXPOSE $LISTENPORT
EXPOSE 22
EXPOSE 3000
EXPOSE 7860
EXPOSE 8000
EXPOSE 8888
# Remember to use the '-p 80:8818' or '-P' flag with your 'docker run' command.
#CMD ["python", "main.py", "--listen", "--port 8818"]
#CMD python main.py --listen --port 8818
CMD ["/start.sh"]

# To run:  docker run --gpus=all -p 80:8818 comfyui-flux:v1
# Reminder: to run a container interactively:
# $ docker run -it comfyui-flux:v1 /bin/bash
