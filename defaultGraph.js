{
  "last_node_id": 26,
  "last_link_id": 45,
  "nodes": [
    {
      "id": 16,
      "type": "KSamplerSelect",
      "pos": [
        470,
        749
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
      "id": 8,
      "type": "VAEDecode",
      "pos": [
        1248,
        192
      ],
      "size": {
        "0": 210,
        "1": 46
      },
      "flags": {},
      "order": 11,
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
          "link": 45
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
      "id": 25,
      "type": "RandomNoise",
      "pos": [
        470,
        611
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
        664154487549730,
        "randomize"
      ]
    },
    {
      "id": 13,
      "type": "SamplerCustomAdvanced",
      "pos": [
        842,
        215
      ],
      "size": {
        "0": 355.20001220703125,
        "1": 106
      },
      "flags": {},
      "order": 10,
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
          "link": 23,
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
      "id": 5,
      "type": "EmptyLatentImage",
      "pos": [
        473,
        450
      ],
      "size": {
        "0": 315,
        "1": 106
      },
      "flags": {},
      "order": 2,
      "mode": 0,
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            23
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "EmptyLatentImage"
      },
      "widgets_values": [
        512,
        512,
        1
      ]
    },
    {
      "id": 11,
      "type": "DualCLIPLoader",
      "pos": [
        -45,
        547
      ],
      "size": {
        "0": 315,
        "1": 106
      },
      "flags": {},
      "order": 3,
      "mode": 0,
      "outputs": [
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "DualCLIPLoader"
      },
      "widgets_values": [
        null,
        null,
        "flux"
      ]
    },
    {
      "id": 26,
      "type": "CheckpointLoaderNF4",
      "pos": [
        -52,
        252
      ],
      "size": {
        "0": 315,
        "1": 98
      },
      "flags": {},
      "order": 4,
      "mode": 0,
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            41,
            42
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            44
          ],
          "shape": 3,
          "slot_index": 1
        },
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            45
          ],
          "shape": 3,
          "slot_index": 2
        }
      ],
      "properties": {},
      "widgets_values": [
        "flux1-dev-bnb-nf4.safetensors"
      ]
    },
    {
      "id": 12,
      "type": "UNETLoader",
      "pos": [
        -46,
        410
      ],
      "size": {
        "0": 315,
        "1": 82
      },
      "flags": {},
      "order": 5,
      "mode": 0,
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "UNETLoader"
      },
      "widgets_values": [
        null,
        "default"
      ]
    },
    {
      "id": 17,
      "type": "BasicScheduler",
      "pos": [
        468,
        867
      ],
      "size": {
        "0": 315,
        "1": 106
      },
      "flags": {},
      "order": 7,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 42,
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
      "id": 10,
      "type": "VAELoader",
      "pos": [
        927,
        482
      ],
      "size": {
        "0": 342.8424072265625,
        "1": 58
      },
      "flags": {},
      "order": 6,
      "mode": 0,
      "outputs": [
        {
          "name": "VAE",
          "type": "VAE",
          "links": [],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "VAELoader"
      },
      "widgets_values": [
        null
      ]
    },
    {
      "id": 22,
      "type": "BasicGuider",
      "pos": [
        795,
        104
      ],
      "size": {
        "0": 241.79998779296875,
        "1": 46
      },
      "flags": {},
      "order": 9,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 41,
          "slot_index": 0
        },
        {
          "name": "conditioning",
          "type": "CONDITIONING",
          "link": 40,
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
      "id": 6,
      "type": "CLIPTextEncode",
      "pos": [
        375,
        221
      ],
      "size": {
        "0": 422.84503173828125,
        "1": 164.31304931640625
      },
      "flags": {},
      "order": 8,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 44
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            40
          ],
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "Astronaut in a jungle, cold color palette, muted colors, very detailed, sharp focus"
      ]
    },
    {
      "id": 9,
      "type": "SaveImage",
      "pos": [
        1325,
        319
      ],
      "size": {
        "0": 985.3012084960938,
        "1": 1060.3828125
      },
      "flags": {},
      "order": 12,
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
      23,
      5,
      0,
      13,
      4,
      "LATENT"
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
      40,
      6,
      0,
      22,
      1,
      "CONDITIONING"
    ],
    [
      41,
      26,
      0,
      22,
      0,
      "MODEL"
    ],
    [
      42,
      26,
      0,
      17,
      0,
      "MODEL"
    ],
    [
      44,
      26,
      1,
      6,
      0,
      "CLIP"
    ],
    [
      45,
      26,
      2,
      8,
      1,
      "VAE"
    ]
  ],
  "groups": [],
  "config": {},
  "extra": {
    "ds": {
      "scale": 0.7247295000000035,
      "offset": [
        131.39225741963287,
        -19.924206784400667
      ]
    }
  },
  "version": 0.4
}
