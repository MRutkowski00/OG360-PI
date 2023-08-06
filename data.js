var APP_DATA = {
  "scenes": [
    {
      "id": "0-korytarz",
      "name": "Korytarz",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.04166454096808714,
          "pitch": 0.06328936696708531,
          "rotation": 0,
          "target": "2-sypialnia"
        },
        {
          "yaw": 0.6250322851206356,
          "pitch": 0.0690019001368718,
          "rotation": 0,
          "target": "3-pokj-1-"
        },
        {
          "yaw": 2.7331110067651654,
          "pitch": 0.08331146453214444,
          "rotation": 0,
          "target": "4-pokj-2"
        },
        {
          "yaw": -2.7874683806085017,
          "pitch": 0.07862998525297726,
          "rotation": 0,
          "target": "1-azienka"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-azienka",
      "name": "Łazienka",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2191935321561775,
          "pitch": 0.07553429995753369,
          "rotation": 0,
          "target": "0-korytarz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-sypialnia",
      "name": "Sypialnia",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8597464892909077,
          "pitch": 0.04773705789884275,
          "rotation": 0,
          "target": "0-korytarz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-pokj-1-",
      "name": "Pokój 1 ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5457315030532506,
          "pitch": 0.03752253806254657,
          "rotation": 0,
          "target": "0-korytarz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-pokj-2",
      "name": "Pokój 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.571926318562145,
          "pitch": 0.025113873732014014,
          "rotation": 0,
          "target": "0-korytarz"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Spacer360",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
