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

  if (anim == "nexts") {
    var funzione = received_data[1];
    funzione = funzione.replace(/£/g, "\r");
    console.group("Animazione: " + anim);
    console.log('Ruolo: ' + funzione);
    console.groupEnd();

    let dimRuolo = getTextWidth(funzione, "600 55px Poppins");

    var animationData = {
      "v": "5.7.1",
      "fr": 29.9700012207031,
      "ip": 0,
      "op": 301.000012259981,
      "w": 1920,
      "h": 1080,
      "nm": "NEXT_3",
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
              "bm": 0
            }
          ]
        }
      ],
      "fonts": {
        "list": [
          {
            "origin": 0,
            "fPath": "./AmsiPro-Bold.otf",
            "fClass": "amsiPro",
            "fFamily": "AmsiPro",
            "fWeight": "600",
            "fStyle": "",
            "fName": "AmsiPro-Bold",
            "ascent": 70.3994750976562
          }, {
            "origin": 0,
            "fPath": "./AmsiPro-Black.otf",
            "fClass": "amsiPro",
            "fFamily": "AmsiPro-Black",
            "fWeight": "900",
            "fStyle": "",
            "fName": "AmsiPro-Black",
            "ascent": 70.599365234375
          }
        ]
      },
      "layers": [
        {
          "ddd": 0,
          "ind": 1,
          "ty": 3,
          "nm": "Null 7",
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
                    "x": 0,
                    "y": 1
                  },
                  "o": {
                    "x": 0.651,
                    "y": 0
                  },
                  "t": 0,
                  "s": [
                    2031, 650, 0
                  ],
                  "to": [
                    -300.167, 0, 0
                  ],
                  "ti": [300.167, 0, 0]
                }, {
                  "t": 30.0000012219251,
                  "s": [230, 650, 0]
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
                100, 100, 100
              ],
              "ix": 6
            }
          },
          "ao": 0,
          "ip": 0,
          "op": 301.000012259981,
          "st": 0,
          "bm": 0
        }, {
          "ddd": 0,
          "ind": 2,
          "ty": 3,
          "nm": "Null 8",
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
                    "x": 0.056,
                    "y": 1
                  },
                  "o": {
                    "x": 0.651,
                    "y": 0
                  },
                  "t": 2,
                  "s": [
                    2211, 650, 0
                  ],
                  "to": [
                    -300.167, 0, 0
                  ],
                  "ti": [300.167, 0, 0]
                }, {
                  "t": 31.0000012626559,
                  "s": [410, 650, 0]
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
                100, 100, 100
              ],
              "ix": 6
            }
          },
          "ao": 0,
          "ip": 2.00000008146167,
          "op": 301.000012259981,
          "st": 2.00000008146167,
          "bm": 0
        }, {
          "ddd": 0,
          "ind": 3,
          "ty": 3,
          "nm": "Null 3",
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
                    "x": 0.277,
                    "y": 1
                  },
                  "o": {
                    "x": 0.822,
                    "y": 0
                  },
                  "t": 13,
                  "s": [
                    908.824, 1192.235, 0
                  ],
                  "to": [
                    0, -25, 0
                  ],
                  "ti": [0, 25, 0]
                }, {
                  "t": 43.0000017514259,
                  "s": [908.824, 1042.235, 0]
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
                100, 100, 100
              ],
              "ix": 6
            }
          },
          "ao": 0,
          "ip": 13.0000005295009,
          "op": 301.000012259981,
          "st": 13.0000005295009,
          "bm": 0
        }, {
          "ddd": 0,
          "ind": 4,
          "ty": 3,
          "nm": "Null 4",
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
                    "x": 0.012,
                    "y": 1
                  },
                  "o": {
                    "x": 0.746,
                    "y": 0
                  },
                  "t": 18,
                  "s": [
                    580.353, 1314.824, 0
                  ],
                  "to": [
                    0, -27, 0
                  ],
                  "ti": [0, 27, 0]
                }, {
                  "t": 54.0000021994651,
                  "s": [580.353, 1152.824, 0]
                }
              ],
              "ix": 2
            },
            "a": {
              "a": 0,
              "k": [
                -319.294, 520.706, 0
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
          "ip": 18.000000733155,
          "op": 301.000012259981,
          "st": 18.000000733155,
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
                -15.253, 249.036, 0
              ],
              "ix": 2
            },
            "a": {
              "a": 0,
              "k": [
                -327.289, 390.361, 0
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
                      353.711, 137.15
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
                    "k": 45,
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
                      1, 1, 1, 1
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
                      0.58431372549, 0.58431372549, 0.58431372549, 1
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
                      -327.289, 390.361
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
          "op": 301.000012259981,
          "st": 0,
          "bm": 0
        }, {
          "ddd": 0,
          "ind": 7,
          "ty": 5,
          "nm": "ORA",
          "parent": 3,
          "tt": 1,
          "sr": 1,
          "ks": {
            "o": {
              "a": 1,
              "k": [
                {
                  "i": {
                    "x": [0.07],
                    "y": [1]
                  },
                  "o": {
                    "x": [0.713],
                    "y": [0]
                  },
                  "t": 20,
                  "s": [0]
                }, {
                  "t": 48.0000019550801,
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
                -559.788, -123.825, 0
              ],
              "ix": 2
            },
            "a": {
              "a": 0,
              "k": [
                1.711, -31.59, 0
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
                    "s": 90,
                    "f": "AmsiPro-Black",
                    "t": "ORA",
                    "j": 2,
                    "tr": 0,
                    "lh": 108,
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
          "op": 301.000012259981,
          "st": -26.0000010590017,
          "bm": 0
        }, {
          "ddd": 0,
          "ind": 8,
          "ty": 4,
          "nm": "Shape Layer 4",
          "parent": 1,
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
                491.747, 249.036, 0
              ],
              "ix": 2
            },
            "a": {
              "a": 0,
              "k": [
                -327.289, 390.361, 0
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
                      1151.711, 211.74
                    ],
                    "ix": 2
                  },
                  "p": {
                    "a": 0,
                    "k": [
                      66, 17
                    ],
                    "ix": 3
                  },
                  "r": {
                    "a": 0,
                    "k": 50,
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
                      1, 1, 1, 1
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
                      -327.289, 390.361
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
          "op": 301.000012259981,
          "st": 0,
          "bm": 0
        }, {
          "ddd": 0,
          "ind": 9,
          "ty": 5,
          "nm": "Il progetto Or.Co. digitsys,  Orientamento Consapevole e Sistemico  al tempo del digitale.",
          "cl": "Co  ",
          "parent": 4,
          "tt": 1,
          "sr": 1,
          "ks": {
            "o": {
              "a": 1,
              "k": [
                {
                  "i": {
                    "x": [0],
                    "y": [1]
                  },
                  "o": {
                    "x": [0.717],
                    "y": [0]
                  },
                  "t": 25,
                  "s": [0]
                }, {
                  "t": 54.0000021994651,
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
                -267.031, 181.02, 0
              ],
              "ix": 2
            },
            "a": {
              "a": 0,
              "k": [
                197.616, -15.863, 0
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
                      0.403919994831, 0.435290008783, 0.815689980984, 1
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
                    "s": 45,
                    "f": "AmsiPro-Bold",
                    "t": funzione, // \r per andare a capo
                    "j": 0,
                    "tr": 0,
                    "lh": 54.0000038146973,
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
          "op": 301.000012259981,
          "st": 0,
          "bm": 0
        }, {
          "ddd": 0,
          "ind": 12,
          "ty": 4,
          "nm": "Shape Layer 2",
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
                -15.253, 249.036, 0
              ],
              "ix": 2
            },
            "a": {
              "a": 0,
              "k": [
                -327.289, 390.361, 0
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
                      223.711, 137.15
                    ],
                    "ix": 2
                  },
                  "p": {
                    "a": 0,
                    "k": [
                      -48, 18
                    ],
                    "ix": 3
                  },
                  "r": {
                    "a": 0,
                    "k": 45,
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
                      1, 1, 1, 1
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
                      0.58431372549, 0.58431372549, 0.58431372549, 1
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
                      -327.289, 390.361
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
          "op": 301.000012259981,
          "st": 0,
          "bm": 0
        }, {
          "ddd": 0,
          "ind": 13,
          "ty": 0,
          "nm": "GRADIENT",
          "parent": 12,
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
                -325.337, 390.361, 0
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
                20, 20, 100
              ],
              "ix": 6
            }
          },
          "ao": 0,
          "w": 1920,
          "h": 1080,
          "ip": 0,
          "op": 301.000012259981,
          "st": 0,
          "bm": 0
        }, {
          "ddd": 0,
          "ind": 14,
          "ty": 4,
          "nm": "Shape Layer 1",
          "parent": 1,
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
                491.747, 249.036, 0
              ],
              "ix": 2
            },
            "a": {
              "a": 0,
              "k": [
                -327.289, 390.361, 0
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
                      1132.711, 212.157
                    ],
                    "ix": 2
                  },
                  "p": {
                    "a": 0,
                    "k": [
                      61, 18
                    ],
                    "ix": 3
                  },
                  "r": {
                    "a": 0,
                    "k": 50,
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
                      1, 1, 1, 1
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
                      -327.289, 390.361
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
          "op": 301.000012259981,
          "st": 0,
          "bm": 0
        }
      ],
      "markers": []
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
