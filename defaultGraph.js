export const defaultGraph =  {
  "last_node_id": 37,
  "last_link_id": 64,
  "nodes": [
    {
      "id": 33,
      "type": "CLIPTextEncode",
      "pos": [
        390,
        400
      ],
      "size": {
        "0": 422.84503173828125,
        "1": 164.31304931640625
      },
      "flags": {
        "collapsed": true
      },
      "order": 3,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 62,
          "slot_index": 0
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            55
          ],
          "slot_index": 0
        }
      ],
      "title": "CLIP Text Encode (Negative Prompt)",
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        ""
      ],
      "color": "#322",
      "bgcolor": "#533"
    },
    {
      "id": 27,
      "type": "EmptySD3LatentImage",
      "pos": [
        471,
        455
      ],
      "size": {
        "0": 315,
        "1": 106
      },
      "flags": {},
      "order": 0,
      "mode": 0,
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            51
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "EmptySD3LatentImage"
      },
      "widgets_values": [
        1024,
        1024,
        1
      ],
      "color": "#323",
      "bgcolor": "#535"
    },
    {
      "id": 35,
      "type": "FluxGuidance",
      "pos": [
        576,
        96
      ],
      "size": {
        "0": 211.60000610351562,
        "1": 58
      },
      "flags": {},
      "order": 5,
      "mode": 0,
      "inputs": [
        {
          "name": "conditioning",
          "type": "CONDITIONING",
          "link": 56
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            57
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
      ]
    },
    {
      "id": 34,
      "type": "Note",
      "pos": [
        831,
        501
      ],
      "size": {
        "0": 282.8617858886719,
        "1": 164.08004760742188
      },
      "flags": {},
      "order": 1,
      "mode": 0,
      "properties": {
        "text": ""
      },
      "widgets_values": [
        "Note that Flux dev and schnell do not have any negative prompt so CFG should be set to 1.0. Setting CFG to 1.0 means the negative prompt is ignored."
      ],
      "color": "#432",
      "bgcolor": "#653"
    },
    {
      "id": 9,
      "type": "SaveImage",
      "pos": [
        1375,
        194
      ],
      "size": {
        "0": 985.3012084960938,
        "1": 1060.3828125
      },
      "flags": {},
      "order": 8,
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
      "id": 31,
      "type": "KSampler",
      "pos": [
        872,
        143
      ],
      "size": {
        "0": 315,
        "1": 262
      },
      "flags": {},
      "order": 6,
      "mode": 0,
      "inputs": [
        {
          "name": "model",
          "type": "MODEL",
          "link": 58
        },
        {
          "name": "positive",
          "type": "CONDITIONING",
          "link": 57
        },
        {
          "name": "negative",
          "type": "CONDITIONING",
          "link": 55
        },
        {
          "name": "latent_image",
          "type": "LATENT",
          "link": 51
        }
      ],
      "outputs": [
        {
          "name": "LATENT",
          "type": "LATENT",
          "links": [
            52
          ],
          "shape": 3,
          "slot_index": 0
        }
      ],
      "properties": {
        "Node name for S&R": "KSampler"
      },
      "widgets_values": [
        488697609851486,
        "randomize",
        20,
        1,
        "euler",
        "simple",
        1
      ]
    },
    {
      "id": 6,
      "type": "CLIPTextEncode",
      "pos": [
        384,
        192
      ],
      "size": {
        "0": 422.84503173828125,
        "1": 164.31304931640625
      },
      "flags": {},
      "order": 4,
      "mode": 0,
      "inputs": [
        {
          "name": "clip",
          "type": "CLIP",
          "link": 63
        }
      ],
      "outputs": [
        {
          "name": "CONDITIONING",
          "type": "CONDITIONING",
          "links": [
            56
          ],
          "slot_index": 0
        }
      ],
      "title": "CLIP Text Encode (Positive Prompt)",
      "properties": {
        "Node name for S&R": "CLIPTextEncode"
      },
      "widgets_values": [
        "cute anime girl with massive fluffy fennec ears and a big fluffy tail blonde messy long hair blue eyes wearing a maid outfit with a long black gold leaf pattern dress and a white apron mouth open placing a fancy black forest cake with candles on top of a dinner table of an old dark Victorian mansion lit by candlelight with a bright window to the foggy forest and very expensive stuff everywhere there are paintings on the walls"
      ],
      "color": "#232",
      "bgcolor": "#353"
    },
    {
      "id": 8,
      "type": "VAEDecode",
      "pos": [
        1257,
        41
      ],
      "size": {
        "0": 210,
        "1": 46
      },
      "flags": {},
      "order": 7,
      "mode": 0,
      "inputs": [
        {
          "name": "samples",
          "type": "LATENT",
          "link": 52
        },
        {
          "name": "vae",
          "type": "VAE",
          "link": 64
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
      "id": 37,
      "type": "CheckpointLoaderNF4",
      "pos": [
        35,
        43
      ],
      "size": {
        "0": 315,
        "1": 98
      },
      "flags": {},
      "order": 2,
      "mode": 0,
      "outputs": [
        {
          "name": "MODEL",
          "type": "MODEL",
          "links": [
            58
          ],
          "shape": 3,
          "slot_index": 0
        },
        {
          "name": "CLIP",
          "type": "CLIP",
          "links": [
            62,
            63
          ],
          "shape": 3,
          "slot_index": 1
        },
        {
          "name": "VAE",
          "type": "VAE",
          "links": [
            64
          ],
          "shape": 3,
          "slot_index": 2
        }
      ],
      "properties": {
        "Node name for S&R": "CheckpointLoaderNF4"
      },
      "widgets_values": [
        "flux1-dev-bnb-nf4-v2.safetensors"
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
      51,
      27,
      0,
      31,
      3,
      "LATENT"
    ],
    [
      52,
      31,
      0,
      8,
      0,
      "LATENT"
    ],
    [
      55,
      33,
      0,
      31,
      2,
      "CONDITIONING"
    ],
    [
      56,
      6,
      0,
      35,
      0,
      "CONDITIONING"
    ],
    [
      57,
      35,
      0,
      31,
      1,
      "CONDITIONING"
    ],
    [
      58,
      37,
      0,
      31,
      0,
      "MODEL"
    ],
    [
      62,
      37,
      1,
      33,
      0,
      "CLIP"
    ],
    [
      63,
      37,
      1,
      6,
      0,
      "CLIP"
    ],
    [
      64,
      37,
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
      "scale": 0.7513148009015777,
      "offset": [
        67.9705388706342,
        282.00797184392417
      ]
    }
  },
  "version": 0.4
}
