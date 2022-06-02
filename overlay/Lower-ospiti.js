var bc = new BroadcastChannel('obs-supermessage');

bc.onmessage = function(ev) {

  function getTextWidth(text, font) {
    // re-use canvas object for better performance
    var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    var context = canvas.getContext("2d");
    context.font = font;
    var metrics = context.measureText(text);
    return metrics.width;
  }

  var received_data = ev.data.split("|");
  var anim = received_data[0];

  if(anim == "ospiti"){
  var nome = received_data[1].toUpperCase();
  var funzione = received_data[2];
  var position = received_data[3];

  console.group("Animazione: " + anim);
  console.log('Name: ' + nome);
  console.log('Ruolo: ' + funzione);
  console.log('Position: ' + position)
  console.groupEnd();

  let dimRuolo = getTextWidth(funzione, "bold 20px AmsiProCond");

  var animationData = {
    "v": "5.7.1",
    "fr": 29.9700012207031,
    "ip": 0,
    "op": 115.000004684046,
    "w": 1920,
    "h": 1080,
    "nm": "LOWERTHIRD_5",
    "ddd": 0,
    "assets": [
      {
        "id": "image_0",
        "w": 1920,
        "h": 1080,
        "u": "./assets/",
        "p": "GRADIENT.jpg",
        "e": 0
      }, {
        "layers": [
          {
            "ddd": 0,
            "ind": 1,
            "ty": 2,
            "isAdjustment": false,
            "nm": "GRADIENT.jpg",
            "cl": "jpg",
            "refId": "image_0",
            "sr": 1,
            "ks": {
              "o": {
                "a": 0,
                "k": 100,
                "ix": 11
              },
              "r": {
                "a": 0,
                "k": 0,
                "ix": 10
              },
              "p": {
                "a": 0,
                "k": [
                  960, 540, 0
                ],
                "ix": 2
              },
              "a": {
                "a": 0,
                "k": [
                  960, 540, 0
                ],
                "ix": 1
              },
              "s": {
                "a": 0,
                "k": [
                  100, 100, 100
                ],
                "ix": 6
              }
            },
            "ao": 0,
            "ip": 0,
            "op": 900.000036657751,
            "st": 0,
            "cp": false,
            "bm": 0
          }, {
            "enabled": false,
            "render": false,
            "ddd": 0,
            "ind": 2,
            "ty": 1,
            "isAdjustment": false,
            "nm": "White Solid 1"
          }
        ],
        "id": 1,
        "nm": "GRADIENT",
        "xt": 1,
        "w": 1920,
        "h": 1080
      }, {
        "id": "comp_0",
        "layers": [
          {
            "ddd": 0,
            "ind": 1,
            "ty": 2,
            "nm": "GRADIENT.jpg",
            "cl": "jpg",
            "refId": "image_0",
            "sr": 1,
            "ks": {
              "o": {
                "a": 0,
                "k": 100,
                "ix": 11
              },
              "r": {
                "a": 0,
                "k": 0,
                "ix": 10
              },
              "p": {
                "a": 0,
                "k": [
                  960, 540, 0
                ],
                "ix": 2
              },
              "a": {
                "a": 0,
                "k": [
                  960, 540, 0
                ],
                "ix": 1
              },
              "s": {
                "a": 0,
                "k": [
                  100, 100, 100
                ],
                "ix": 6
              }
            },
            "ao": 0,
            "ip": 0,
            "op": 900.000036657751,
            "st": 0,
            "cp": false,
            "bm": 0
          }
        ]
      }
    ],
    "fonts": {
      "list": [
        {
          "origin": 3,
          "fPath": "./fonts/AsmiPro/AmsiProCond-Bold.otf",
          "fClass": "amsiProCond",
          "fFamily": "AmsiProCond",
          "fWeight": "600",
          "fStyle": "",
          "fName": "AmsiProCond-Bold",
          "ascent": 70.4986572265625
        }, {
          "origin": 0,
          "fPath": "./fonts/AsmiPro/AmsiPro-Bold.otf",
          "fClass": "amsiPro",
          "fFamily": "AmsiPro",
          "fWeight": "600",
          "fStyle": "",
          "fName": "AmsiPro-Bold",
          "ascent": 70.3994750976562
        }
      ]
    },
    "layers": [
      {
        "ddd": 0,
        "ind": 1,
        "ty": 3,
        "nm": "Global Position",
        "sr": 1,
        "ks": {
          "o": {
            "a": 0,
            "k": 0,
            "ix": 11
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 10
          },
          "p": {
            "a": 0,
            "k": [
              138.5, 769, 0
            ],
            "ix": 2
          },
          "a": {
            "a": 0,
            "k": [
              0, 0, 0
            ],
            "ix": 1
          },
          "s": {
            "a": 0,
            "k": [
              779.5, 188.25, 100
            ],
            "ix": 6
          }
        },
        "ao": 0,
        "ip": 0,
        "op": 240.0000097754,
        "st": 0,
        "cp": false,
        "bm": 0
      }, {
        "ddd": 0,
        "ind": 2,
        "ty": 3,
        "nm": "Null 54",
        "parent": 1,
        "sr": 1,
        "ks": {
          "o": {
            "a": 0,
            "k": 0,
            "ix": 11
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 10
          },
          "p": {
            "a": 1,
            "k": [
              {
                "i": {
                  "x": 0.079,
                  "y": 1
                },
                "o": {
                  "x": 0.777,
                  "y": 0
                },
                "t": 0,
                "s": [
                  -3.656, 48.34, 0
                ],
                "to": [
                  0, -31.873, 0
                ],
                "ti": [0, 31.873, 0]
              }, {
                "i": {
                  "x": 0.079,
                  "y": 0.079
                },
                "o": {
                  "x": 0.333,
                  "y": 0.333
                },
                "t": 30,
                "s": [
                  -3.656, -142.895, 0
                ],
                "to": [
                  0, 0, 0
                ],
                "ti": [0, 0, 0]
              }, {
                "i": {
                  "x": 0.667,
                  "y": 1
                },
                "o": {
                  "x": 0.167,
                  "y": 0
                },
                "t": 170,
                "s": [
                  -3.656, -142.895, 0
                ],
                "to": [
                  0, 31.873, 0
                ],
                "ti": [0, -31.873, 0]
              }, {
                "t": 191.000007779589,
                "s": [-3.656, 48.34, 0]
              }
            ],
            "ix": 2
          },
          "a": {
            "a": 0,
            "k": [
              50, 50, 0
            ],
            "ix": 1
          },
          "s": {
            "a": 0,
            "k": [
              12.829, 53.121, 100
            ],
            "ix": 6
          }
        },
        "ao": 0,
        "ip": 0,
        "op": 240.0000097754,
        "st": 0,
        "cp": false,
        "mb": true,
        "bm": 0
      }, {
        "ddd": 0,
        "ind": 3,
        "ty": 3,
        "nm": "Null 55",
        "parent": 1,
        "sr": 1,
        "ks": {
          "o": {
            "a": 0,
            "k": 0,
            "ix": 11
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 10
          },
          "p": {
            "a": 1,
            "k": [
              {
                "i": {
                  "x": 0.079,
                  "y": 1
                },
                "o": {
                  "x": 0.777,
                  "y": 0
                },
                "t": 2,
                "s": [
                  -52, 112.085, 0
                ],
                "to": [
                  0, -31.873, 0
                ],
                "ti": [0, 31.873, 0]
              }, {
                "i": {
                  "x": 0.079,
                  "y": 0.079
                },
                "o": {
                  "x": 0.333,
                  "y": 0.333
                },
                "t": 32,
                "s": [
                  -52, -79.15, 0
                ],
                "to": [
                  0, 0, 0
                ],
                "ti": [0, 0, 0]
              }, {
                "i": {
                  "x": 0.667,
                  "y": 1
                },
                "o": {
                  "x": 0.167,
                  "y": 0
                },
                "t": 170,
                "s": [
                  -52, -79.15, 0
                ],
                "to": [
                  0, 31.873, 0
                ],
                "ti": [0, -31.873, 0]
              }, {
                "t": 191.000007779589,
                "s": [-52, 112.085, 0]
              }
            ],
            "ix": 2
          },
          "a": {
            "a": 0,
            "k": [
              50, 50, 0
            ],
            "ix": 1
          },
          "s": {
            "a": 0,
            "k": [
              12.829, 53.121, 100
            ],
            "ix": 6
          }
        },
        "ao": 0,
        "ip": 2.00000008146167,
        "op": 242.000009856862,
        "st": 2.00000008146167,
        "cp": false,
        "mb": true,
        "bm": 0
      }, {
        "ddd": 0,
        "ind": 4,
        "ty": 3,
        "nm": "Null 56",
        "parent": 1,
        "sr": 1,
        "ks": {
          "o": {
            "a": 0,
            "k": 0,
            "ix": 11
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 10
          },
          "p": {
            "a": 1,
            "k": [
              {
                "i": {
                  "x": 0.245,
                  "y": 1
                },
                "o": {
                  "x": 0.799,
                  "y": 0
                },
                "t": 16,
                "s": [
                  -24, -73.838, 0
                ],
                "to": [
                  0, -7.968, 0
                ],
                "ti": [0, 7.968, 0]
              }, {
                "i": {
                  "x": 0.245,
                  "y": 0.245
                },
                "o": {
                  "x": 0.167,
                  "y": 0.167
                },
                "t": 46,
                "s": [
                  -24, -121.647, 0
                ],
                "to": [
                  0, 0, 0
                ],
                "ti": [0, 0, 0]
              }, {
                "i": {
                  "x": 0.833,
                  "y": 1
                },
                "o": {
                  "x": 0.167,
                  "y": 0
                },
                "t": 156,
                "s": [
                  -24, -121.647, 0
                ],
                "to": [
                  0, 7.968, 0
                ],
                "ti": [0, -7.968, 0]
              }, {
                "t": 169.000006883511,
                "s": [-24, -73.838, 0]
              }
            ],
            "ix": 2
          },
          "a": {
            "a": 0,
            "k": [
              0, 0, 0
            ],
            "ix": 1
          },
          "s": {
            "a": 0,
            "k": [
              12.829, 53.121, 100
            ],
            "ix": 6
          }
        },
        "ao": 0,
        "ip": 0,
        "op": 240.0000097754,
        "st": 0,
        "cp": false,
        "mb": true,
        "bm": 0
      }, {
        "ddd": 0,
        "ind": 5,
        "ty": 3,
        "nm": "Null 57",
        "parent": 1,
        "sr": 1,
        "ks": {
          "o": {
            "a": 0,
            "k": 0,
            "ix": 11
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 10
          },
          "p": {
            "a": 1,
            "k": [
              {
                "i": {
                  "x": 0.245,
                  "y": 1
                },
                "o": {
                  "x": 0.799,
                  "y": 0
                },
                "t": 19,
                "s": [
                  -60, -73.838, 0
                ],
                "to": [
                  0, -7.968, 0
                ],
                "ti": [0, 7.968, 0]
              }, {
                "i": {
                  "x": 0.245,
                  "y": 0.245
                },
                "o": {
                  "x": 0.167,
                  "y": 0.167
                },
                "t": 49,
                "s": [
                  -60, -121.647, 0
                ],
                "to": [
                  0, 0, 0
                ],
                "ti": [0, 0, 0]
              }, {
                "i": {
                  "x": 0.833,
                  "y": 1
                },
                "o": {
                  "x": 0.167,
                  "y": 0
                },
                "t": 158,
                "s": [
                  -60, -121.647, 0
                ],
                "to": [
                  0, 7.968, 0
                ],
                "ti": [0, -7.968, 0]
              }, {
                "t": 179.000007290819,
                "s": [-60, -73.838, 0]
              }
            ],
            "ix": 2
          },
          "a": {
            "a": 0,
            "k": [
              0, 0, 0
            ],
            "ix": 1
          },
          "s": {
            "a": 0,
            "k": [
              12.829, 53.121, 100
            ],
            "ix": 6
          }
        },
        "ao": 0,
        "ip": 0,
        "op": 240.0000097754,
        "st": 0,
        "cp": false,
        "mb": true,
        "bm": 0
      }, {
        "ddd": 0,
        "ind": 6,
        "ty": 4,
        "nm": "Shape Layer 3",
        "parent": 2,
        "td": 1,
        "sr": 1,
        "ks": {
          "o": {
            "a": 0,
            "k": 100,
            "ix": 11
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 10
          },
          "p": {
            "a": 0,
            "k": [
              467.674, 375.391, 0
            ],
            "ix": 2
          },
          "a": {
            "a": 0,
            "k": [
              48, 225.391, 0
            ],
            "ix": 1
          },
          "s": {
            "a": 0,
            "k": [
              100, 100, 100
            ],
            "ix": 6
          }
        },
        "ao": 0,
        "shapes": [
          {
            "ty": "gr",
            "it": [
              {
                "ty": "rc",
                "d": 1,
                "s": {
                  "a": 0,
                  "k": [
                    778.87, 115.174
                  ],
                  "ix": 2
                },
                "p": {
                  "a": 0,
                  "k": [
                    0, 0
                  ],
                  "ix": 3
                },
                "r": {
                  "a": 0,
                  "k": 35,
                  "ix": 4
                },
                "nm": "Rectangle Path 1",
                "mn": "ADBE Vector Shape - Rect",
                "hd": false
              }, {
                "ty": "st",
                "c": {
                  "a": 0,
                  "k": [
                    0.925490016563, 0.925490016563, 0.925490016563, 1
                  ],
                  "ix": 3
                },
                "o": {
                  "a": 0,
                  "k": 100,
                  "ix": 4
                },
                "w": {
                  "a": 0,
                  "k": 0,
                  "ix": 5
                },
                "lc": 1,
                "lj": 1,
                "ml": 4,
                "bm": 0,
                "nm": "Stroke 1",
                "mn": "ADBE Vector Graphic - Stroke",
                "hd": false
              }, {
                "ty": "fl",
                "c": {
                  "a": 0,
                  "k": [
                    1, 1, 1, 1
                  ],
                  "ix": 4
                },
                "o": {
                  "a": 0,
                  "k": 100,
                  "ix": 5
                },
                "r": 1,
                "bm": 0,
                "nm": "Fill 1",
                "mn": "ADBE Vector Graphic - Fill",
                "hd": false
              }, {
                "ty": "tr",
                "p": {
                  "a": 0,
                  "k": [
                    48, 225.391
                  ],
                  "ix": 2
                },
                "a": {
                  "a": 0,
                  "k": [
                    0, 0
                  ],
                  "ix": 1
                },
                "s": {
                  "a": 0,
                  "k": [
                    100, 100
                  ],
                  "ix": 3
                },
                "r": {
                  "a": 0,
                  "k": 0,
                  "ix": 6
                },
                "o": {
                  "a": 0,
                  "k": 100,
                  "ix": 7
                },
                "sk": {
                  "a": 0,
                  "k": 0,
                  "ix": 4
                },
                "sa": {
                  "a": 0,
                  "k": 0,
                  "ix": 5
                },
                "nm": "Trasformazione"
              }
            ],
            "nm": "Rectangle 1",
            "np": 3,
            "cix": 2,
            "bm": 0,
            "ix": 1,
            "mn": "ADBE Vector Group",
            "hd": false
          }
        ],
        "ip": 0,
        "op": 240.0000097754,
        "st": 0,
        "cp": true,
        "mb": true,
        "bm": 0
      }, {
        "ddd": 0,
        "ind": 7,
        "ty": 5,
        "nm": "LUCIA ABBINANTE",
        "parent": 4,
        "tt": 1,
        "sr": 1,
        "ks": {
          "o": {
            "a": 1,
            "k": [
              {
                "i": {
                  "x": [0.211],
                  "y": [1]
                },
                "o": {
                  "x": [0.817],
                  "y": [0]
                },
                "t": 21,
                "s": [0]
              }, {
                "t": 35.0000014255792,
                "s": [100]
              }
            ],
            "ix": 11
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 10
          },
          "p": {
            "a": 0,
            "k": [
              210, 286.94, 0
            ],
            "ix": 2
          },
          "a": {
            "a": 0,
            "k": [
              -1.292, -19.277, 0
            ],
            "ix": 1
          },
          "s": {
            "a": 0,
            "k": [
              100, 100, 100
            ],
            "ix": 6
          }
        },
        "ao": 0,
        "ef": [
          {
            "ty": 21,
            "nm": "Riempimento",
            "np": 9,
            "mn": "ADBE Fill",
            "ix": 1,
            "en": 1,
            "ef": [
              {
                "ty": 10,
                "nm": "Maschera di riempimento",
                "mn": "ADBE Fill-0001",
                "ix": 1,
                "v": {
                  "a": 0,
                  "k": 0,
                  "ix": 1
                }
              }, {
                "ty": 7,
                "nm": "Tutte le maschere",
                "mn": "ADBE Fill-0007",
                "ix": 2,
                "v": {
                  "a": 0,
                  "k": 0,
                  "ix": 2
                }
              }, {
                "ty": 2,
                "nm": "Colore",
                "mn": "ADBE Fill-0002",
                "ix": 3,
                "v": {
                  "a": 0,
                  "k": [
                    0.0705882353, 0.537254902, 0.866666667, 1 //colore testo
                  ],
                  "ix": 3
                }
              }, {
                "ty": 7,
                "nm": "Inverti",
                "mn": "ADBE Fill-0006",
                "ix": 4,
                "v": {
                  "a": 0,
                  "k": 0,
                  "ix": 4
                }
              }, {
                "ty": 0,
                "nm": "Sfumatura orizzontale",
                "mn": "ADBE Fill-0003",
                "ix": 5,
                "v": {
                  "a": 0,
                  "k": 0,
                  "ix": 5
                }
              }, {
                "ty": 0,
                "nm": "Sfumatura verticale",
                "mn": "ADBE Fill-0004",
                "ix": 6,
                "v": {
                  "a": 0,
                  "k": 0,
                  "ix": 6
                }
              }, {
                "ty": 0,
                "nm": "Opacità",
                "mn": "ADBE Fill-0005",
                "ix": 7,
                "v": {
                  "a": 0,
                  "k": 1,
                  "ix": 7
                }
              }
            ]
          }
        ],
        "t": {
          "d": {
            "k": [
              {
                "s": {
                  "s": 60,
                  "f": "AmsiPro-Bold",
                  "t": nome,
                  "j": 0,
                  "tr": 16,
                  "lh": 72,
                  "ls": 0,
                  "fc": [0.404, 0.435, 0.816]
                },
                "t": 0
              }
            ]
          },
          "p": {},
          "m": {
            "g": 1,
            "a": {
              "a": 0,
              "k": [
                0, 0
              ],
              "ix": 2
            }
          },
          "a": []
        },
        "ip": 0,
        "op": 240.0000097754,
        "st": 0,
        "cp": true,
        "mb": true,
        "bm": 0
      }, {
        "ddd": 0,
        "ind": 8,
        "ty": 4,
        "nm": "Shape Layer 4",
        "parent": 3,
        "td": 1,
        "sr": 1,
        "ks": {
          "o": {
            "a": 0,
            "k": 100,
            "ix": 11
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 10
          },
          "p": {
            "a": 0,
            "k": [
              713, 358.174, 0
            ],
            "ix": 2
          },
          "a": {
            "a": 0,
            "k": [
              48, 225.391, 0
            ],
            "ix": 1
          },
          "s": {
            "a": 0,
            "k": [
              150, 113, 100
            ],
            "ix": 6
          }
        },
        "ao": 0,
        "shapes": [
          {
            "ty": "gr",
            "it": [
              {
                "ty": "rc",
                "d": 1,
                "s": {
                  "a": 0,
                  "k": [
                    dimRuolo, 57.084 //DimensioneRuolo1 = (xDimensione - 401.87)/2
                  ],
                  "ix": 2
                },
                "p": {
                  "a": 0,
                  "k": [
                    (dimRuolo-401.87)/2, 0 //PosizioneRuolo1 = (xDimensione - 401.87)/2
                  ],
                  "ix": 3
                },
                "r": {
                  "a": 0,
                  "k": 20,
                  "ix": 4
                },
                "nm": "Rectangle Path 1",
                "mn": "ADBE Vector Shape - Rect",
                "hd": false
              }, {
                "ty": "st",
                "c": {
                  "a": 0,
                  "k": [
                    0.925490016563, 0.925490016563, 0.925490016563, 1
                  ],
                  "ix": 3
                },
                "o": {
                  "a": 0,
                  "k": 100,
                  "ix": 4
                },
                "w": {
                  "a": 0,
                  "k": 0,
                  "ix": 5
                },
                "lc": 1,
                "lj": 1,
                "ml": 4,
                "bm": 0,
                "nm": "Stroke 1",
                "mn": "ADBE Vector Graphic - Stroke",
                "hd": false
              }, {
                "ty": "fl",
                "c": {
                  "a": 0,
                  "k": [
                    1, 1, 1, 1
                  ],
                  "ix": 4
                },
                "o": {
                  "a": 0,
                  "k": 100,
                  "ix": 5
                },
                "r": 1,
                "bm": 0,
                "nm": "Fill 1",
                "mn": "ADBE Vector Graphic - Fill",
                "hd": false
              }, {
                "ty": "tr",
                "p": {
                  "a": 0,
                  "k": [
                    78, 225.391
                  ],
                  "ix": 2
                },
                "a": {
                  "a": 0,
                  "k": [
                    0, 0
                  ],
                  "ix": 1
                },
                "s": {
                  "a": 0,
                  "k": [
                    100, 100
                  ],
                  "ix": 3
                },
                "r": {
                  "a": 0,
                  "k": 0,
                  "ix": 6
                },
                "o": {
                  "a": 0,
                  "k": 100,
                  "ix": 7
                },
                "sk": {
                  "a": 0,
                  "k": 0,
                  "ix": 4
                },
                "sa": {
                  "a": 0,
                  "k": 0,
                  "ix": 5
                },
                "nm": "Trasformazione"
              }
            ],
            "nm": "Rectangle 1",
            "np": 3,
            "cix": 2,
            "bm": 0,
            "ix": 1,
            "mn": "ADBE Vector Group",
            "hd": false
          }
        ],
        "ip": 0,
        "op": 240.0000097754,
        "st": 0,
        "cp": true,
        "mb": true,
        "bm": 0
      }, {
        "ddd": 0,
        "ind": 9,
        "ty": 5,
        "nm": "Direttrice Agenzia Nazionale dei Giovani",
        "parent": 5,
        "tt": 1,
        "sr": 1,
        "ks": {
          "o": {
            "a": 1,
            "k": [
              {
                "i": {
                  "x": [0.211],
                  "y": [1]
                },
                "o": {
                  "x": [0.817],
                  "y": [0]
                },
                "t": 25,
                "s": [0]
              }, {
                "t": 39.0000015885026,
                "s": [100]
              }
            ],
            "ix": 11
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 10
          },
          "p": {
            "a": 0,
            "k": [
              497.305, 386.174, 0
            ],
            "ix": 2
          },
          "a": {
            "a": 0,
            "k": [
              -0.822, -15.826, 0
            ],
            "ix": 1
          },
          "s": {
            "a": 0,
            "k": [
              100, 100, 100
            ],
            "ix": 6
          }
        },
        "ao": 0,
        "ef": [
          {
            "ty": 21,
            "nm": "Riempimento",
            "np": 9,
            "mn": "ADBE Fill",
            "ix": 1,
            "en": 1,
            "ef": [
              {
                "ty": 10,
                "nm": "Maschera di riempimento",
                "mn": "ADBE Fill-0001",
                "ix": 1,
                "v": {
                  "a": 0,
                  "k": 0,
                  "ix": 1
                }
              }, {
                "ty": 7,
                "nm": "Tutte le maschere",
                "mn": "ADBE Fill-0007",
                "ix": 2,
                "v": {
                  "a": 0,
                  "k": 0,
                  "ix": 2
                }
              }, {
                "ty": 2,
                "nm": "Colore",
                "mn": "ADBE Fill-0002",
                "ix": 3,
                "v": {
                  "a": 0,
                  "k": [
                    1, 1, 1, 1
                  ],
                  "ix": 3
                }
              }, {
                "ty": 7,
                "nm": "Inverti",
                "mn": "ADBE Fill-0006",
                "ix": 4,
                "v": {
                  "a": 0,
                  "k": 0,
                  "ix": 4
                }
              }, {
                "ty": 0,
                "nm": "Sfumatura orizzontale",
                "mn": "ADBE Fill-0003",
                "ix": 5,
                "v": {
                  "a": 0,
                  "k": 0,
                  "ix": 5
                }
              }, {
                "ty": 0,
                "nm": "Sfumatura verticale",
                "mn": "ADBE Fill-0004",
                "ix": 6,
                "v": {
                  "a": 0,
                  "k": 0,
                  "ix": 6
                }
              }, {
                "ty": 0,
                "nm": "Opacità",
                "mn": "ADBE Fill-0005",
                "ix": 7,
                "v": {
                  "a": 0,
                  "k": 1,
                  "ix": 7
                }
              }
            ]
          }
        ],
        "t": {
          "d": {
            "k": [
              {
                "s": {
                  "s": 35,
                  "f": "AmsiProCond-Bold",
                  "t": funzione,
                  "j": 0,
                  "tr": 0,
                  "lh": 42,
                  "ls": 0,
                  "fc": [1, 1, 1]
                },
                "t": 0
              }
            ]
          },
          "p": {},
          "m": {
            "g": 1,
            "a": {
              "a": 0,
              "k": [
                0, 0
              ],
              "ix": 2
            }
          },
          "a": []
        },
        "ip": 0,
        "op": 240.0000097754,
        "st": 0,
        "cp": true,
        "mb": true,
        "bm": 0
      }, {
        "ddd": 0,
        "ind": 10,
        "ty": 4,
        "nm": "Shape Layer 2",
        "parent": 3,
        "td": 1,
        "sr": 1,
        "ks": {
          "o": {
            "a": 0,
            "k": 100,
            "ix": 11
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 10
          },
          "p": {
            "a": 0,
            "k": [
              713, 358.174, 0
            ],
            "ix": 2
          },
          "a": {
            "a": 0,
            "k": [
              48, 225.391, 0
            ],
            "ix": 1
          },
          "s": {
            "a": 0,
            "k": [
              150, 113, 100
            ],
            "ix": 6
          }
        },
        "ao": 0,
        "shapes": [
          {
            "ty": "gr",
            "it": [
              {
                "ty": "rc",
                "d": 1,
                "s": {
                  "a": 0,
                  "k": [
                    dimRuolo, 57.084 //DimensioneRuolo Shape2
                  ],
                  "ix": 2
                },
                "p": {
                  "a": 0,
                  "k": [
                    (dimRuolo-401.87)/2, 0 //PosizioneRuolo2 = (xDimensione - 401.87)/2
                  ],
                  "ix": 3
                },
                "r": {
                  "a": 0,
                  "k": 20,
                  "ix": 4
                },
                "nm": "Rectangle Path 1",
                "mn": "ADBE Vector Shape - Rect",
                "hd": false
              }, {
                "ty": "st",
                "c": {
                  "a": 0,
                  "k": [
                    0.925490016563, 0.925490016563, 0.925490016563, 1
                  ],
                  "ix": 3
                },
                "o": {
                  "a": 0,
                  "k": 100,
                  "ix": 4
                },
                "w": {
                  "a": 0,
                  "k": 0,
                  "ix": 5
                },
                "lc": 1,
                "lj": 1,
                "ml": 4,
                "bm": 0,
                "nm": "Stroke 1",
                "mn": "ADBE Vector Graphic - Stroke",
                "hd": false
              }, {
                "ty": "fl",
                "c": {
                  "a": 0,
                  "k": [
                    1, 1, 1, 1
                  ],
                  "ix": 4
                },
                "o": {
                  "a": 0,
                  "k": 100,
                  "ix": 5
                },
                "r": 1,
                "bm": 0,
                "nm": "Fill 1",
                "mn": "ADBE Vector Graphic - Fill",
                "hd": false
              }, {
                "ty": "tr",
                "p": {
                  "a": 0,
                  "k": [
                    78, 225.391
                  ],
                  "ix": 2
                },
                "a": {
                  "a": 0,
                  "k": [
                    0, 0
                  ],
                  "ix": 1
                },
                "s": {
                  "a": 0,
                  "k": [
                    100, 100
                  ],
                  "ix": 3
                },
                "r": {
                  "a": 0,
                  "k": 0,
                  "ix": 6
                },
                "o": {
                  "a": 0,
                  "k": 100,
                  "ix": 7
                },
                "sk": {
                  "a": 0,
                  "k": 0,
                  "ix": 4
                },
                "sa": {
                  "a": 0,
                  "k": 0,
                  "ix": 5
                },
                "nm": "Trasformazione"
              }
            ],
            "nm": "Rectangle 1",
            "np": 3,
            "cix": 2,
            "bm": 0,
            "ix": 1,
            "mn": "ADBE Vector Group",
            "hd": false
          }
        ],
        "ip": 0,
        "op": 240.0000097754,
        "st": 0,
        "cp": true,
        "mb": true,
        "bm": 0
      }, {
        "ddd": 0,
        "ind": 11,
        "ty": 0,
        "nm": "GRADIENT",
        "parent": 10,
        "tt": 1,
        "refId": "comp_0",
        "sr": 1,
        "ks": {
          "o": {
            "a": 0,
            "k": 100,
            "ix": 11
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 10
          },
          "p": {
            "a": 0,
            "k": [
              235, 225.261, 0 //Pos gradient (-33.465)
            ],
            "ix": 2
          },
          "a": {
            "a": 0,
            "k": [
              960, 540, 0
            ],
            "ix": 1
          },
          "s": {
            "a": 0,
            "k": [
              50, 34, 100 //Scala gradient (max: 50 34)
            ],
            "ix": 6
          }
        },
        "ao": 0,
        "w": 1920,
        "h": 1080,
        "ip": 0,
        "op": 240.0000097754,
        "st": 0,
        "cp": false,
        "mb": true,
        "bm": 0
      }, {
        "ddd": 0,
        "ind": 12,
        "ty": 4,
        "nm": "Shape Layer 1",
        "parent": 2,
        "sr": 1,
        "ks": {
          "o": {
            "a": 0,
            "k": 100,
            "ix": 11
          },
          "r": {
            "a": 0,
            "k": 0,
            "ix": 10
          },
          "p": {
            "a": 0,
            "k": [
              467.674, 375.391, 0
            ],
            "ix": 2
          },
          "a": {
            "a": 0,
            "k": [
              48, 225.391, 0
            ],
            "ix": 1
          },
          "s": {
            "a": 0,
            "k": [
              100, 100, 100
            ],
            "ix": 6
          }
        },
        "ao": 0,
        "shapes": [
          {
            "ty": "gr",
            "it": [
              {
                "ty": "rc",
                "d": 1,
                "s": {
                  "a": 0,
                  "k": [
                    778.87, 115.174
                  ],
                  "ix": 2
                },
                "p": {
                  "a": 0,
                  "k": [
                    0, 0
                  ],
                  "ix": 3
                },
                "r": {
                  "a": 0,
                  "k": 35,
                  "ix": 4
                },
                "nm": "Rectangle Path 1",
                "mn": "ADBE Vector Shape - Rect",
                "hd": false
              }, {
                "ty": "st",
                "c": {
                  "a": 0,
                  "k": [
                    0.925490016563, 0.925490016563, 0.925490016563, 1
                  ],
                  "ix": 3
                },
                "o": {
                  "a": 0,
                  "k": 100,
                  "ix": 4
                },
                "w": {
                  "a": 0,
                  "k": 0,
                  "ix": 5
                },
                "lc": 1,
                "lj": 1,
                "ml": 4,
                "bm": 0,
                "nm": "Stroke 1",
                "mn": "ADBE Vector Graphic - Stroke",
                "hd": false
              }, {
                "ty": "fl",
                "c": {
                  "a": 0,
                  "k": [
                    1, 1, 1, 1
                  ],
                  "ix": 4
                },
                "o": {
                  "a": 0,
                  "k": 100,
                  "ix": 5
                },
                "r": 1,
                "bm": 0,
                "nm": "Fill 1",
                "mn": "ADBE Vector Graphic - Fill",
                "hd": false
              }, {
                "ty": "tr",
                "p": {
                  "a": 0,
                  "k": [
                    48, 225.391
                  ],
                  "ix": 2
                },
                "a": {
                  "a": 0,
                  "k": [
                    0, 0
                  ],
                  "ix": 1
                },
                "s": {
                  "a": 0,
                  "k": [
                    100, 100
                  ],
                  "ix": 3
                },
                "r": {
                  "a": 0,
                  "k": 0,
                  "ix": 6
                },
                "o": {
                  "a": 0,
                  "k": 100,
                  "ix": 7
                },
                "sk": {
                  "a": 0,
                  "k": 0,
                  "ix": 4
                },
                "sa": {
                  "a": 0,
                  "k": 0,
                  "ix": 5
                },
                "nm": "Trasformazione"
              }
            ],
            "nm": "Rectangle 1",
            "np": 3,
            "cix": 2,
            "bm": 0,
            "ix": 1,
            "mn": "ADBE Vector Group",
            "hd": false
          }
        ],
        "ip": 0,
        "op": 240.0000097754,
        "st": 0,
        "cp": true,
        "mb": true,
        "bm": 0
      }
    ],
    "markers": [],
    "mb": {
      "sa": 180,
      "sp": -90,
      "spf": 16,
      "asl": 128
    }
  }

  var params = {
    container: document.getElementById('lottie'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    animationData: animationData
  };

  var anim;
  anim = lottie.loadAnimation(params);

  var plays = 0;
  anim.playSegments([
    0, 90
  ], true);
  anim.addEventListener('complete', function() {
    plays++;
    if (plays == 2) {
      anim.destroy();
    } else if (plays == 1) {
      anim.setDirection(-1);
      anim.playSegments([
        90, 0
      ], true);
    }
  })
  }
}
