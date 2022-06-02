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

  if (anim == "rp") {
    var nome = received_data[1].toUpperCase();
    var funzione = received_data[2];
    var position = received_data[3];

    console.group("Animazione: " + anim);
    console.log('Name: ' + nome);
    console.log('Ruolo: ' + funzione);
    console.log('Position: ' + position)
    console.groupEnd();

    let dimNome = getTextWidth(funzione, "bold 70px Amsi");
    let dimRuolo = getTextWidth(nome, "600 55px Poppins");
    if(nome == "DIRETTORE DELLA FOTOGRAFIA"){
      dimRuolo = dimRuolo-200
    }

    var animationData = {
      "v": "5.7.1",
      "fr": 29.9700012207031,
      "ip": 0,
      "op": 240.0000097754,
      "w": 1920,
      "h": 1080,
      "nm": "LOWERTHIRD_4",
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
            "origin": 1,
            "fPath": "https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap",
            "fClass": "poppins",
            "fFamily": "Poppins",
            "fWeight": "500",
            "fStyle": "SemiBold",
            "fName": "Poppins-SemiBold",
            "ascent": 73.9990234375
          }, {
            "origin": 0,
            "fPath": "./AmsiPro-Bold.otf",
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
          "nm": "Null 54",
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
                    960, 860, 0
                  ],
                  "to": [
                    0, -60, 0
                  ],
                  "ti": [0, 60, 0]
                }, {
                  "t": 30.0000012219251,
                  "s": [960, 500, 0]
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
          "op": 240.0000097754,
          "st": 0,
          "bm": 0
        }, {
          "ddd": 0,
          "ind": 2,
          "ty": 3,
          "nm": "Null 55",
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
                    960, 980, 0
                  ],
                  "to": [
                    0, -60, 0
                  ],
                  "ti": [0, 60, 0]
                }, {
                  "t": 32.0000013033867,
                  "s": [960, 620, 0]
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
          "op": 242.000009856862,
          "st": 2.00000008146167,
          "bm": 0
        }, {
          "ddd": 0,
          "ind": 3,
          "ty": 3,
          "nm": "Null 56",
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
                  "t": 17,
                  "s": [
                    960, 630, 0
                  ],
                  "to": [
                    0, -15, 0
                  ],
                  "ti": [0, 15, 0]
                }, {
                  "t": 47.0000019143492,
                  "s": [960, 540, 0]
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
                100, 100, 100
              ],
              "ix": 6
            }
          },
          "ao": 0,
          "ip": 0,
          "op": 240.0000097754,
          "st": 0,
          "bm": 0
        }, {
          "ddd": 0,
          "ind": 4,
          "ty": 3,
          "nm": "Null 57",
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
                  "t": 21,
                  "s": [
                    960, 630, 0
                  ],
                  "to": [
                    0, -15, 0
                  ],
                  "ti": [0, 15, 0]
                }, {
                  "t": 51.0000020772726,
                  "s": [960, 540, 0]
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
                100, 100, 100
              ],
              "ix": 6
            }
          },
          "ao": 0,
          "ip": 0,
          "op": 240.0000097754,
          "st": 0,
          "bm": 0
        }, {
          "ddd": 0,
          "ind": 5,
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
                50, 345.391, 0
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
                      dimNome, 145.174 //Dimesione Nome (1264.87)
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
          "bm": 0
        }, {
          "ddd": 0,
          "ind": 6,
          "ty": 5,
          "nm": "JONATHAN CAPUTO e ANDREA OTTOMANELLI",
          "parent": 3,
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
                0, 274.94, 0
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
                    "s": 55,
                    "f": "AmsiPro-Bold",
                    "t": funzione,
                    "j": 2,
                    "tr": 0,
                    "lh": 66,
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
          "op": 900.000036657751,
          "st": 0,
          "bm": 0
        }, {
          "ddd": 0,
          "ind": 7,
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
                50, 328.174, 0
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
                      dimRuolo, 69.084 //Dimensione Ruolo (489.87)
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
                    "k": 25,
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
          "bm": 0
        }, {
          "ddd": 0,
          "ind": 8,
          "ty": 5,
          "nm": "REGIA DI",
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
                  "t": 27,
                  "s": [0]
                }, {
                  "t": 41.0000016699642,
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
                0, 358.174, 0
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
                    "f": "Poppins-SemiBold",
                    "t": nome,
                    "j": 2,
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
          "op": 900.000036657751,
          "st": 0,
          "bm": 0
        }, {
          "ddd": 0,
          "ind": 9,
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
                50, 328.174, 0
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
                      dimRuolo, 69.084 //Dimensione Ruolo 489.87
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
                    "k": 25,
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
          "bm": 0
        }, {
          "ddd": 0,
          "ind": 10,
          "ty": 0,
          "nm": "GRADIENT",
          "parent": 9,
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
                48, 225.261, 0
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
                50, 34, 100 //Scala gradien (34)
              ],
              "ix": 6
            }
          },
          "ao": 0,
          "w": 1920,
          "h": 1080,
          "ip": 0,
          "op": 900.000036657751,
          "st": 0,
          "bm": 0
        }, {
          "ddd": 0,
          "ind": 11,
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
                50, 375.391, 0
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
                      dimNome, 145.174 //(1264.87)
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
