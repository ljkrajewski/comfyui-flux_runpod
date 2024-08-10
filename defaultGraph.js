export const defaultGraph =  {
  "last_node_id": 37,
  "last_link_id": 116,
  "nodes": [
    {
      "id": 17,
      "type": "BasicScheduler",
      "pos": [
        480,
        1008
      ],
      "size": {
        "0": 315,
        "1": 106
      },
      "flags": {},
      "order": 13,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 55,
          "slot_index": 0
        }
      ],
      "outputs": [
        {
          "name": "SIGMAS",
          "type": "SIGMAS",
          "links": [
            20
          ],
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "BasicScheduler"
      },
      "widgets_values": [
        "simple",
        20,
        1
      ]
    },
    {
      "id": 16,
      "type": "KSamplerSelect",
      "pos": [
        480,
        912
      ],
      "size": {
        "0": 315,
        "1": 58
      },
      "flags": {},
      "order": 0,
      "mode": 0,
      "outputs": [
        {
          "name": "SAMPLER",
          "type": "SAMPLER",
          "links": [
            19
          ],
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "KSamplerSelect"
      },
      "widgets_values": [
        "euler"
      ]
    },
    {
      "id": 26,
      "type": "FluxGuidance",
      "pos": [
        480,
        144
      ],
      "size": {
        "0": 317.4000244140625,
        "1": 58
      },
      "flags": {},
      "order": 12,
      "mode": 0,
      "inputs": [
        {
          "name": "conditioning",
          "type": "CONDITIONING",
          "link": 41
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            42
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "FluxGuidance"
      },
      "widgets_values": [
        3.5
      ],
      "color": "#233",
      "bgcolor": "#355"
    },
    {
      "id": 22,
      "type": "BasicGuider",
      "pos": [
        576,
        48
      ],
      "size": {
        "0": 222.3482666015625,
        "1": 46
      },
      "flags": {},
      "order": 14,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 54,
          "slot_index": 0
        },
        {
          "name": "conditioning",
          "type": "CONDITIONING",
          "link": 42,
          "slot_index": 1
        }
      ],
      "outputs": [
        {
          "name": "GUIDER",
          "type": "GUIDER",
          "links": [
            30
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "BasicGuider"
      }
    },
    {
      "id": 13,
      "type": "SamplerCustomAdvanced",
      "pos": [
        864,
        192
      ],
      "size": {
        "0": 272.3617858886719,
        "1": 124.53733825683594
      },
      "flags": {},
      "order": 15,
      "mode": 0,
      "inputs": [
        {
          "name": "noise",
          "type": "NOISE",
          "link": 37,
          "slot_index": 0
        },
        {
          "name": "guider",
          "type": "GUIDER",
          "link": 30,
          "slot_index": 1
        },
        {
          "name": "sampler",
          "type": "SAMPLER",
          "link": 19,
          "slot_index": 2
        },
        {
          "name": "sigmas",
          "type": "SIGMAS",
          "link": 20,
          "slot_index": 3
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 116,
          "slot_index": 4
        }
      ],
      "outputs": [
        {
          "name": "output",
          "type": "LATENT",
          "links": [
            24
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "denoised_output",
          "type": "LATENT",
          "links": null,
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "SamplerCustomAdvanced"
      }
    },
    {
      "id": 25,
      "type": "RandomNoise",
      "pos": [
        480,
        768
      ],
      "size": {
        "0": 315,
        "1": 82
      },
      "flags": {},
      "order": 1,
      "mode": 0,
      "outputs": [
        {
          "name": "NOISE",
          "type": "NOISE",
          "links": [
            37
          ],
          "shape": 3
        }
      ],
      "properties": {
        "Node name for S&R": "RandomNoise"
      },
      "widgets_values": [
        253267605526399,
        "randomize"
      ],
      "color": "#2a363b",
      "bgcolor": "#3f5159"
    },
    {
      "id": 8,
      "type": "VAEDecode",
      "pos": [
        866,
        367
      ],
      "size": {
        "0": 210,
        "1": 46
      },
      "flags": {},
      "order": 16,
      "mode": 0,
      "inputs": [
        {
          "name": "samples",
          "type": "LATENT",
          "link": 24
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 12
        }
      ],
      "outputs": [
        {
          "name": "IMAGE",
          "type": "IMAGE",
          "links": [
            9
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "VAEDecode"
      }
    },
    {
      "id": 30,
      "type": "ModelSamplingFlux",
      "pos": [
        480,
        1152
      ],
      "size": {
        "0": 315,
        "1": 130
      },
      "flags": {},
      "order": 11,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 56,
          "slot_index": 0
        },
        {
          "name": "width",
          "type": "INT",
          "link": 115,
          "widget": {
            "name": "width"
          },
          "slot_index": 1
        },
        {
          "name": "height",
          "type": "INT",
          "link": 114,
          "widget": {
            "name": "height"
          },
          "slot_index": 2
        }
      ],
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            54,
            55
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "ModelSamplingFlux"
      },
      "widgets_values": [
        1.15,
        0.5,
        720,
        1440
      ]
    },
    {
      "id": 27,
      "type": "EmptySD3LatentImage",
      "pos": [
        480,
        624
      ],
      "size": {
        "0": 315,
        "1": 106
      },
      "flags": {},
      "order": 10,
      "mode": 0,
      "inputs": [
        {
          "name": "width",
          "type": "INT",
          "link": 112,
          "widget": {
            "name": "width"
          }
        },
        {
          "name": "height",
          "type": "INT",
          "link": 113,
          "widget": {
            "name": "height"
          }
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            116
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "EmptySD3LatentImage"
      },
      "widgets_values": [
        720,
        1440,
        1
      ]
    },
    {
      "id": 9,
      "type": "SaveImage",
      "pos": [
        1155,
        196
      ],
      "size": {
        "0": 985.3012084960938,
        "1": 1060.3828125
      },
      "flags": {},
      "order": 17,
      "mode": 0,
      "inputs": [
        {
          "name": "images",
          "type": "IMAGE",
          "link": 9
        }
      ],
      "properties": {},
      "widgets_values": [
        "ComfyUI"
      ]
    },
    {
      "id": 37,
      "type": "Note",
      "pos": [
        480,
        1344
      ],
      "size": {
        "0": 314.99755859375,
        "1": 117.98363494873047
      },
      "flags": {},
      "order": 2,
      "mode": 0,
      "properties": {
        "text": ""
      },
      "widgets_values": [
        "The reference sampling implementation auto adjusts the shift value based on the resolution, if you don't want this you can just bypass (CTRL-B) this ModelSamplingFlux node.\n"
      ],
      "color": "#432",
      "bgcolor": "#653"
    },
    {
      "id": 28,
      "type": "Note",
      "pos": [
        48,
        576
      ],
      "size": {
        "0": 336,
        "1": 288
      },
      "flags": {},
      "order": 3,
      "mode": 0,
      "properties": {
        "text": ""
      },
      "widgets_values": [
        "If you get an error in any of the nodes above make sure the files are in the correct directories.\n\nSee the top of the examples page for the links : https://comfyanonymous.github.io/ComfyUI_examples/flux/\n\nflux1-dev.safetensors goes in: ComfyUI/models/unet/\n\nt5xxl_fp16.safetensors and clip_l.safetensors go in: ComfyUI/models/clip/\n\nae.safetensors goes in: ComfyUI/models/vae/\n\n\nTip: You can set the weight_dtype above to one of the fp8 types if you have memory issues."
      ],
      "color": "#432",
      "bgcolor": "#653"
    },
    {
      "id": 11,
      "type": "DualCLIPLoader",
      "pos": [
        48,
        288
      ],
      "size": {
        "0": 315,
        "1": 106
      },
      "flags": {},
      "order": 4,
      "mode": 0,
      "outputs": [
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            10
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "DualCLIPLoader"
      },
      "widgets_values": [
        "t5xxl_fp8_e4m3fn.safetensors",
        "clip_l.safetensors",
        "flux"
      ]
    },
    {
      "id": 10,
      "type": "VAELoader",
      "pos": [
        48,
        432
      ],
      "size": {
        "0": 311.81634521484375,
        "1": 60.429901123046875
      },
      "flags": {},
      "order": 5,
      "mode": 0,
      "outputs": [
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            12
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "VAELoader"
      },
      "widgets_values": [
        "ae.safetensors"
      ]
    },
    {
      "id": 12,
      "type": "UNETLoader",
      "pos": [
        48,
        144
      ],
      "size": {
        "0": 315,
        "1": 82
      },
      "flags": {},
      "order": 6,
      "mode": 0,
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            56
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "UNETLoader"
      },
      "widgets_values": [
        "flux1-dev-fp8.safetensors",
        "fp8_e4m3fn"
      ],
      "color": "#223",
      "bgcolor": "#335"
    },
    {
      "id": 6,
      "type": "CLIPTextEncode",
      "pos": [
        384,
        240
      ],
      "size": {
        "0": 422.84503173828125,
        "1": 164.31304931640625
      },
      "flags": {},
      "order": 9,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 10
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            41
          ],
          "slot_index": 0
        }
      ],
      "title": "CLIP Text Encode (Positive Prompt)",
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "a cute puppy playing in a forest"
      ],
      "color": "#232",
      "bgcolor": "#353"
    },
    {
      "id": 35,
      "type": "PrimitiveNode",
      "pos": [
        672,
        480
      ],
      "size": {
        "0": 210,
        "1": 82
      },
      "flags": {},
      "order": 7,
      "mode": 0,
      "outputs": [
        {
          "name": "INT",
          "type": "INT",
          "links": [
            113,
            114
          ],
          "widget": {
            "name": "height"
          },
          "slot_index": 0
        }
      ],
      "title": "height",
      "properties": {
        "Run widget replace on values": false
      },
      "widgets_values": [
        1440,
        "fixed"
      ],
      "color": "#323",
      "bgcolor": "#535"
    },
    {
      "id": 34,
      "type": "PrimitiveNode",
      "pos": [
        432,
        480
      ],
      "size": {
        "0": 210,
        "1": 82
      },
      "flags": {},
      "order": 8,
      "mode": 0,
      "outputs": [
        {
          "name": "INT",
          "type": "INT",
          "links": [
            112,
            115
          ],
          "slot_index": 0,
          "widget": {
            "name": "width"
          }
        }
      ],
      "title": "width",
      "properties": {
        "Run widget replace on values": false
      },
      "widgets_values": [
        720,
        "fixed"
      ],
      "color": "#323",
      "bgcolor": "#535"
    }
  ],
  "links": [
    [
      9,
      8,
      0,
      9,
      0,
      "IMAGE"
    ],
    [
      10,
      11,
      0,
      6,
      0,
      "CLIP"
    ],
    [
      12,
      10,
      0,
      8,
      1,
      "VAE"
    ],
    [
      19,
      16,
      0,
      13,
      2,
      "SAMPLER"
    ],
    [
      20,
      17,
      0,
      13,
      3,
      "SIGMAS"
    ],
    [
      24,
      13,
      0,
      8,
      0,
      "LATENT"
    ],
    [
      30,
      22,
      0,
      13,
      1,
      "GUIDER"
    ],
    [
      37,
      25,
      0,
      13,
      0,
      "NOISE"
    ],
    [
      41,
      6,
      0,
      26,
      0,
      "CONDITIONING"
    ],
    [
      42,
      26,
      0,
      22,
      1,
      "CONDITIONING"
    ],
    [
      54,
      30,
      0,
      22,
      0,
      "MODEL"
    ],
    [
      55,
      30,
      0,
      17,
      0,
      "MODEL"
    ],
    [
      56,
      12,
      0,
      30,
      0,
      "MODEL"
    ],
    [
      112,
      34,
      0,
      27,
      0,
      "INT"
    ],
    [
      113,
      35,
      0,
      27,
      1,
      "INT"
    ],
    [
      114,
      35,
      0,
      30,
      2,
      "INT"
    ],
    [
      115,
      34,
      0,
      30,
      1,
      "INT"
    ],
    [
      116,
      27,
      0,
      13,
      4,
      "LATENT"
    ]
  ],
  "groups": [],
  "config": {},
  "extra": {
    "ds": {
      "scale": 1,
      "offset": [
        307.0024427693272,
        -113.16545033947921
      ]
    },
    "groupNodes": {}
  },
  "version": 0.4
}
