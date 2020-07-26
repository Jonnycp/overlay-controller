var bc = new BroadcastChannel('obs-lower-thirds-channel');
bc.onmessage = function (ev) {
  received_data=ev.data.split("|");
  var animazione = received_data[0];
  var social1_tit1 = received_data[1];
  var social1_tit2 = received_data[2];
  var social1_des1 = received_data[3];
  var social1_des2 = received_data[4];
  var social1_des3 = received_data[5];
  var social1_des4 = received_data[6];
  var social1_des5 = received_data[7];
  var position = received_data[8];

if (animazione == "social1"){
  var lottiecolors = [
      [(colori.social1.sfondo1[0]/255), (colori.social1.sfondo1[1]/255), (colori.social1.sfondo1[2]/255)], //Titolo sfondo
      [(colori.social1.sfondo2[0]/255), (colori.social1.sfondo2[1]/255), (colori.social1.sfondo2[2]/255)], //Descrizioni sfondo
      [(colori.social1.texts[0]/255), (colori.social1.texts[1]/255), (colori.social1.texts[2]/255)], //Testi e icone
  ];
  console.log ('Titoli: ' + received_data[1] + ', ' + received_data[2]);
  console.log ('Descrizioni: ' + received_data[3] + ', ' + received_data[4] + ', ' + received_data[5] + ', ' + received_data[6] + ', ' + received_data[7]);
  console.log("Lottie Colors");
  console.log (JSON.stringify(lottiecolors, null, 4));

if (position == 'left') {document.getElementById("lottie").classList.remove("right");};
if (position == 'right') {document.getElementById("lottie").classList.add("right");};

var animationData = {
    "v": "5.6.10",
    "fr": 29.9700012207031,
    "ip": 0,
    "op": 300.00001221925,
    "w": 1980,
    "h": 1080,
    "nm": "Social Edit 2",
    "ddd": 0,
    "assets": [{
        "id": "image_0",
        "w": 512,
        "h": 512,
        "u": "images/",
        "p": "img_0.png",
        "e": 0
    }, {
        "id": "image_1",
        "w": 3579,
        "h": 768,
        "u": "images/",
        "p": "img_1.png",
        "e": 0
    }, {
        "id": "comp_0",
        "layers": [{
            "ddd": 0,
            "ind": 1,
            "ty": 3,
            "nm": "Color Controller",
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
                    "k": [960, 540, 0],
                    "ix": 2
                },
                "a": {
                    "a": 0,
                    "k": [0, 0, 0],
                    "ix": 1
                },
                "s": {
                    "a": 0,
                    "k": [100, 100, 100],
                    "ix": 6
                }
            },
            "ao": 0,
            "ef": [{
                "ty": 5,
                "nm": "Color 01",
                "np": 3,
                "mn": "ADBE Color Control",
                "ix": 1,
                "en": 1,
                "ef": [{
                    "ty": 2,
                    "nm": "Colore",
                    "mn": "ADBE Color Control-0001",
                    "ix": 1,
                    "v": {
                        "a": 0,
                        "k": [lottiecolors[2][0], lottiecolors[2][1], lottiecolors[2][2], 1], //TESTI e icone
                        "ix": 1
                    }
                }]
            }, {
                "ty": 5,
                "nm": "Color 02",
                "np": 3,
                "mn": "ADBE Color Control",
                "ix": 2,
                "en": 1,
                "ef": [{
                    "ty": 2,
                    "nm": "Colore",
                    "mn": "ADBE Color Control-0001",
                    "ix": 1,
                    "v": {
                        "a": 0,
                        "k": [lottiecolors[0][0], lottiecolors[0][1], lottiecolors[0][2], 1], //Sfondo titolo
                        "ix": 1
                    }
                }]
            }, {
                "ty": 5,
                "nm": "Color 03",
                "np": 3,
                "mn": "ADBE Color Control",
                "ix": 3,
                "en": 1,
                "ef": [{
                    "ty": 2,
                    "nm": "Colore",
                    "mn": "ADBE Color Control-0001",
                    "ix": 1,
                    "v": {
                        "a": 0,
                        "k": [lottiecolors[1][0], lottiecolors[1][1], lottiecolors[1][2], 1], //sfondo descrizioni
                        "ix": 1
                    }
                }]
            }],
            "ip": 0,
            "op": 721.000029366932,
            "st": 0,
            "bm": 0
        }, {
            "ddd": 0,
            "ind": 2,
            "ty": 0,
            "nm": "Social",
            "refId": "comp_1",
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
                    "a": 1,
                    "k": [{
                        "i": {
                            "x": 0.833,
                            "y": 0.833
                        },
                        "o": {
                            "x": 0.167,
                            "y": 0.167
                        },
                        "t": 255,
                        "s": [73, 156, 0],
                        "to": [-136.667, 0, 0],
                        "ti": [136.667, 0, 0]
                    }, {
                        "t": 301.000012259981,
                        "s": [-747, 156, 0]
                    }],
                    "ix": 2
                },
                "a": {
                    "a": 0,
                    "k": [60, 60, 0],
                    "ix": 1
                },
                "s": {
                    "a": 0,
                    "k": [65, 65, 100],
                    "ix": 6
                }
            },
            "ao": 0,
            "hasMask": true,
            "masksProperties": [{
                "inv": false,
                "mode": "a",
                "pt": {
                    "a": 0,
                    "k": {
                        "i": [
                            [0, 0],
                            [0, 0],
                            [0, 0],
                            [0, 0]
                        ],
                        "o": [
                            [0, 0],
                            [0, 0],
                            [0, 0],
                            [0, 0]
                        ],
                        "v": [
                            [102.094, 22.497],
                            [18.208, 22.939],
                            [18.629, 102.916],
                            [102.515, 102.474]
                        ],
                        "c": true
                    },
                    "ix": 1
                },
                "o": {
                    "a": 0,
                    "k": 100,
                    "ix": 3
                },
                "x": {
                    "a": 0,
                    "k": 0,
                    "ix": 4
                },
                "nm": "Maschera 1"
            }],
            "ef": [{
                "ty": 21,
                "nm": "Riempimento",
                "np": 9,
                "mn": "ADBE Fill",
                "ix": 1,
                "en": 1,
                "ef": [{
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
                        "k": [1, 0.833333313465, 0, 1],
                        "ix": 3,
                        "x": "var $bm_rt;\n$bm_rt = thisComp.layer('Color Controller').effect('Color 01')('ADBE Color Control-0001');"
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
                }]
            }],
            "w": 120,
            "h": 120,
            "ip": 23.0000009368092,
            "op": 615.000025049463,
            "st": 18.000000733155,
            "bm": 0
        }, {
            "ddd": 0,
            "ind": 3,
            "ty": 4,
            "nm": "Mask 01",
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
                    "k": [400, 300, 0],
                    "ix": 2
                },
                "a": {
                    "a": 0,
                    "k": [0, 150, 0],
                    "ix": 1
                },
                "s": {
                    "a": 0,
                    "k": [100, 58.667, 100],
                    "ix": 6
                }
            },
            "ao": 0,
            "shapes": [{
                "ty": "gr",
                "it": [{
                    "ty": "rc",
                    "d": 1,
                    "s": {
                        "a": 0,
                        "k": [800, 300],
                        "ix": 2
                    },
                    "p": {
                        "a": 0,
                        "k": [0, 0],
                        "ix": 3
                    },
                    "r": {
                        "a": 0,
                        "k": 0,
                        "ix": 4
                    },
                    "nm": "Rectangle Path 1",
                    "mn": "ADBE Vector Shape - Rect",
                    "hd": false
                }, {
                    "ty": "fl",
                    "c": {
                        "a": 0,
                        "k": [1, 0.588235294118, 0.23137254902, 1],
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
                        "k": [0, 0],
                        "ix": 2
                    },
                    "a": {
                        "a": 0,
                        "k": [0, 0],
                        "ix": 1
                    },
                    "s": {
                        "a": 0,
                        "k": [100, 100],
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
                }],
                "nm": "Rectangle 1",
                "np": 3,
                "cix": 2,
                "bm": 0,
                "ix": 1,
                "mn": "ADBE Vector Group",
                "hd": false
            }],
            "ip": 0,
            "op": 600.000024438501,
            "st": 0,
            "bm": 0
        }, {
            "ddd": 0,
            "ind": 4,
            "ty": 0,
            "nm": "Text 01",
            "tt": 2,
            "refId": "comp_6",
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
                    "a": 1,
                    "k": [{
                        "i": {
                            "x": 0,
                            "y": 1
                        },
                        "o": {
                            "x": 0.333,
                            "y": 0
                        },
                        "t": 0,
                        "s": [396, 168, 0],
                        "to": [0, -11.667, 0],
                        "ti": [0, 11.667, 0]
                    }, {
                        "i": {
                            "x": 0,
                            "y": 0
                        },
                        "o": {
                            "x": 0.167,
                            "y": 0.167
                        },
                        "t": 30,
                        "s": [396, 98, 0],
                        "to": [0, 0, 0],
                        "ti": [0, 0, 0]
                    }, {
                        "i": {
                            "x": 0,
                            "y": 1
                        },
                        "o": {
                            "x": 0.167,
                            "y": 0
                        },
                        "t": 255,
                        "s": [396, 98, 0],
                        "to": [-136.667, 0, 0],
                        "ti": [136.667, 0, 0]
                    }, {
                        "t": 301.000012259981,
                        "s": [-424, 98, 0]
                    }],
                    "ix": 2
                },
                "a": {
                    "a": 0,
                    "k": [350, 35, 0],
                    "ix": 1
                },
                "s": {
                    "a": 0,
                    "k": [100, 100, 100],
                    "ix": 6
                }
            },
            "ao": 0,
            "w": 700,
            "h": 70,
            "ip": 0,
            "op": 900.000036657751,
            "st": 0,
            "bm": 0
        }, {
            "ddd": 0,
            "ind": 5,
            "ty": 4,
            "nm": "Mask 02",
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
                    "k": [400, 300, 0],
                    "ix": 2
                },
                "a": {
                    "a": 0,
                    "k": [0, 150, 0],
                    "ix": 1
                },
                "s": {
                    "a": 0,
                    "k": [100, 39.667, 100],
                    "ix": 6
                }
            },
            "ao": 0,
            "shapes": [{
                "ty": "gr",
                "it": [{
                    "ty": "rc",
                    "d": 1,
                    "s": {
                        "a": 0,
                        "k": [800, 300],
                        "ix": 2
                    },
                    "p": {
                        "a": 0,
                        "k": [0, 0],
                        "ix": 3
                    },
                    "r": {
                        "a": 0,
                        "k": 0,
                        "ix": 4
                    },
                    "nm": "Rectangle Path 1",
                    "mn": "ADBE Vector Shape - Rect",
                    "hd": false
                }, {
                    "ty": "fl",
                    "c": {
                        "a": 0,
                        "k": [1, 0.588235294118, 0.23137254902, 1],
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
                        "k": [0, 0],
                        "ix": 2
                    },
                    "a": {
                        "a": 0,
                        "k": [0, 0],
                        "ix": 1
                    },
                    "s": {
                        "a": 0,
                        "k": [100, 100],
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
                }],
                "nm": "Rectangle 1",
                "np": 3,
                "cix": 2,
                "bm": 0,
                "ix": 1,
                "mn": "ADBE Vector Group",
                "hd": false
            }],
            "ip": 24.00000097754,
            "op": 624.000025416041,
            "st": 24.00000097754,
            "bm": 0
        }, {
            "ddd": 0,
            "ind": 6,
            "ty": 0,
            "nm": "Text 02",
            "tt": 2,
            "refId": "comp_7",
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
                    "a": 1,
                    "k": [{
                        "i": {
                            "x": 0,
                            "y": 1
                        },
                        "o": {
                            "x": 0.333,
                            "y": 0
                        },
                        "t": 24,
                        "s": [458, 226, 0],
                        "to": [0, -11.667, 0],
                        "ti": [0, 11.667, 0]
                    }, {
                        "i": {
                            "x": 0,
                            "y": 0
                        },
                        "o": {
                            "x": 0.167,
                            "y": 0.167
                        },
                        "t": 54,
                        "s": [458, 156, 0],
                        "to": [0, 0, 0],
                        "ti": [0, 0, 0]
                    }, {
                        "i": {
                            "x": 0,
                            "y": 1
                        },
                        "o": {
                            "x": 0.167,
                            "y": 0
                        },
                        "t": 255,
                        "s": [458, 156, 0],
                        "to": [-136.667, 0, 0],
                        "ti": [136.667, 0, 0]
                    }, {
                        "t": 301.000012259981,
                        "s": [-362, 156, 0]
                    }],
                    "ix": 2
                },
                "a": {
                    "a": 0,
                    "k": [350, 35, 0],
                    "ix": 1
                },
                "s": {
                    "a": 0,
                    "k": [100, 100, 100],
                    "ix": 6
                }
            },
            "ao": 0,
            "w": 700,
            "h": 70,
            "ip": 24.00000097754,
            "op": 924.000037635292,
            "st": 24.00000097754,
            "bm": 0
        }]
    }, {
        "id": "comp_1",
        "layers": [{
            "ddd": 0,
            "ind": 1,
            "ty": 3,
            "nm": "Controll",
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
                    "k": [{
                        "i": {
                            "x": 0,
                            "y": 1
                        },
                        "o": {
                            "x": 0.333,
                            "y": 0
                        },
                        "t": 0,
                        "s": [60, 60, 0],
                        "to": [0, -13.333, 0],
                        "ti": [0, 26.667, 0]
                    }, {
                        "i": {
                            "x": 0,
                            "y": 1
                        },
                        "o": {
                            "x": 0.333,
                            "y": 0
                        },
                        "t": 40,
                        "s": [60, -20, 0],
                        "to": [0, -26.667, 0],
                        "ti": [0, 27, 0]
                    }, {
                        "i": {
                            "x": 0,
                            "y": 1
                        },
                        "o": {
                            "x": 0.333,
                            "y": 0
                        },
                        "t": 80,
                        "s": [60, -100, 0],
                        "to": [0, -27, 0],
                        "ti": [0, 27, 0]
                    }, {
                        "i": {
                            "x": 0,
                            "y": 1
                        },
                        "o": {
                            "x": 0.333,
                            "y": 0
                        },
                        "t": 120,
                        "s": [60, -182, 0],
                        "to": [0, -27, 0],
                        "ti": [0, 13.333, 0]
                    }, {
                        "t": 160.000006516934,
                        "s": [60, -262, 0]
                    }],
                    "ix": 2
                },
                "a": {
                    "a": 0,
                    "k": [0, 0, 0],
                    "ix": 1
                },
                "s": {
                    "a": 0,
                    "k": [100, 100, 100],
                    "ix": 6
                }
            },
            "ao": 0,
            "ip": 0,
            "op": 610.000024845809,
            "st": 0,
            "bm": 0
        }, {
            "ddd": 0,
            "ind": 2,
            "ty": 0,
            "nm": "Social icon",
            "parent": 1,
            "refId": "comp_2",
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
                    "k": [0, 82, 0],
                    "ix": 2
                },
                "a": {
                    "a": 0,
                    "k": [40, 40, 0],
                    "ix": 1
                },
                "s": {
                    "a": 0,
                    "k": [100, 100, 100],
                    "ix": 6
                }
            },
            "ao": 0,
            "w": 80,
            "h": 80,
            "ip": 0,
            "op": 600.000024438501,
            "st": 0,
            "bm": 0
        }, {
            "ddd": 0,
            "ind": 3,
            "ty": 0,
            "nm": "Social icon 2",
            "parent": 1,
            "refId": "comp_3",
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
                    "k": [0, 162, 0],
                    "ix": 2
                },
                "a": {
                    "a": 0,
                    "k": [40, 40, 0],
                    "ix": 1
                },
                "s": {
                    "a": 0,
                    "k": [100, 100, 100],
                    "ix": 6
                }
            },
            "ao": 0,
            "w": 80,
            "h": 80,
            "ip": 0,
            "op": 600.000024438501,
            "st": 0,
            "bm": 0
        }, {
            "ddd": 0,
            "ind": 4,
            "ty": 0,
            "nm": "Social icon 3",
            "parent": 1,
            "refId": "comp_4",
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
                    "k": [0, 242, 0],
                    "ix": 2
                },
                "a": {
                    "a": 0,
                    "k": [40, 40, 0],
                    "ix": 1
                },
                "s": {
                    "a": 0,
                    "k": [100, 100, 100],
                    "ix": 6
                }
            },
            "ao": 0,
            "w": 80,
            "h": 80,
            "ip": 0,
            "op": 600.000024438501,
            "st": 0,
            "bm": 0
        }, {
            "ddd": 0,
            "ind": 5,
            "ty": 0,
            "nm": "Social icon 4",
            "parent": 1,
            "refId": "comp_5",
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
                    "k": [0, 322, 0],
                    "ix": 2
                },
                "a": {
                    "a": 0,
                    "k": [40, 40, 0],
                    "ix": 1
                },
                "s": {
                    "a": 0,
                    "k": [100, 100, 100],
                    "ix": 6
                }
            },
            "ao": 0,
            "w": 80,
            "h": 80,
            "ip": 0,
            "op": 600.000024438501,
            "st": 0,
            "bm": 0
        }]
    }, {
        "id": "comp_2",
        "layers": [{
            "ddd": 0,
            "ind": 1,
            "ty": 2,
            "nm": "play-button.png",
            "cl": "png",
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
                    "k": [40, 40, 0],
                    "ix": 2
                },
                "a": {
                    "a": 0,
                    "k": [256, 256, 0],
                    "ix": 1
                },
                "s": {
                    "a": 0,
                    "k": [15.723, 15.723, 100],
                    "ix": 6
                }
            },
            "ao": 0,
            "ef": [{
                "ty": 23,
                "nm": "Tre tonalità",
                "np": 6,
                "mn": "ADBE Tritone",
                "ix": 1,
                "en": 1,
                "ef": [{
                    "ty": 2,
                    "nm": "Luci",
                    "mn": "ADBE Tritone-0001",
                    "ix": 1,
                    "v": {
                        "a": 0,
                        "k": [1, 1, 1, 0],
                        "ix": 1
                    }
                }, {
                    "ty": 2,
                    "nm": "Mezzitoni",
                    "mn": "ADBE Tritone-0002",
                    "ix": 2,
                    "v": {
                        "a": 0,
                        "k": [0.498039215686, 0.392156862745, 0.274509803922, 0],
                        "ix": 2
                    }
                }, {
                    "ty": 2,
                    "nm": "Ombre",
                    "mn": "ADBE Tritone-0003",
                    "ix": 3,
                    "v": {
                        "a": 0,
                        "k": [0.160784319043, 0.572549045086, 0.756862819195, 1],
                        "ix": 3
                    }
                }, {
                    "ty": 0,
                    "nm": "Fondi con originale",
                    "mn": "ADBE Tritone-0004",
                    "ix": 4,
                    "v": {
                        "a": 0,
                        "k": 0,
                        "ix": 4
                    }
                }]
            }],
            "ip": 0,
            "op": 600.000024438501,
            "st": 0,
            "bm": 0
        }]
    }, {
        "id": "comp_3",
        "layers": [{
            "ddd": 0,
            "ind": 1,
            "ty": 4,
            "nm": "facebook",
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
                    "k": [40, 40, 0],
                    "ix": 2
                },
                "a": {
                    "a": 0,
                    "k": [20, 20.5, 0],
                    "ix": 1
                },
                "s": {
                    "a": 0,
                    "k": [190, 190, 100],
                    "ix": 6
                }
            },
            "ao": 0,
            "ef": [{
                "ty": 21,
                "nm": "Riempimento",
                "np": 9,
                "mn": "ADBE Fill",
                "ix": 1,
                "en": 1,
                "ef": [{
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
                        "k": [0.160784319043, 0.572549045086, 0.75686275959, 1],
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
                }]
            }],
            "shapes": [{
                "ty": "gr",
                "it": [{
                    "ind": 0,
                    "ty": "sh",
                    "ix": 1,
                    "ks": {
                        "a": 0,
                        "k": {
                            "i": [
                                [10.953, 0],
                                [0, -10.949],
                                [-10.949, 0],
                                [0, 10.953]
                            ],
                            "o": [
                                [-10.949, 0],
                                [0, 10.953],
                                [10.953, 0],
                                [0, -10.949]
                            ],
                            "v": [
                                [-0.003, -19.861],
                                [-19.861, -0.001],
                                [-0.003, 19.861],
                                [19.861, -0.001]
                            ],
                            "c": true
                        },
                        "ix": 2
                    },
                    "nm": "Path 1",
                    "mn": "ADBE Vector Shape - Group",
                    "hd": false
                }, {
                    "ind": 1,
                    "ty": "sh",
                    "ix": 2,
                    "ks": {
                        "a": 0,
                        "k": {
                            "i": [
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [-3.937, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, -0.898],
                                [0, 0],
                                [0, 0]
                            ],
                            "o": [
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, -1.883],
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [-0.422, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0]
                            ],
                            "v": [
                                [4.939, 0.697],
                                [1.708, 0.697],
                                [1.708, 12.218],
                                [-3.081, 12.218],
                                [-3.081, 0.697],
                                [-5.357, 0.697],
                                [-5.357, -3.373],
                                [-3.081, -3.373],
                                [-3.081, -6.006],
                                [1.752, -10.838],
                                [5.299, -10.822],
                                [5.299, -6.872],
                                [2.724, -6.872],
                                [1.708, -5.763],
                                [1.708, -3.368],
                                [5.357, -3.368]
                            ],
                            "c": true
                        },
                        "ix": 2
                    },
                    "nm": "Path 2",
                    "mn": "ADBE Vector Shape - Group",
                    "hd": false
                }, {
                    "ind": 2,
                    "ty": "sh",
                    "ix": 3,
                    "ks": {
                        "a": 0,
                        "k": {
                            "i": [
                                [0, 0]
                            ],
                            "o": [
                                [0, 0]
                            ],
                            "v": [
                                [4.939, 0.697]
                            ],
                            "c": false
                        },
                        "ix": 2
                    },
                    "nm": "Path 3",
                    "mn": "ADBE Vector Shape - Group",
                    "hd": false
                }, {
                    "ty": "mm",
                    "mm": 1,
                    "nm": "Merge Paths 1",
                    "mn": "ADBE Vector Filter - Merge",
                    "hd": false
                }, {
                    "ty": "fl",
                    "c": {
                        "a": 0,
                        "k": [0, 0, 0, 1],
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
                        "k": [19.861, 20.139],
                        "ix": 2
                    },
                    "a": {
                        "a": 0,
                        "k": [0, 0],
                        "ix": 1
                    },
                    "s": {
                        "a": 0,
                        "k": [100, 100],
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
                }],
                "nm": "Group 1",
                "np": 5,
                "cix": 2,
                "bm": 0,
                "ix": 1,
                "mn": "ADBE Vector Group",
                "hd": false
            }],
            "ip": 0,
            "op": 150.000006109625,
            "st": 0,
            "bm": 0
        }]
    }, {
        "id": "comp_4",
        "layers": [{
            "ddd": 0,
            "ind": 1,
            "ty": 4,
            "nm": "instagram",
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
                    "k": [40, 40, 0],
                    "ix": 2
                },
                "a": {
                    "a": 0,
                    "k": [20, 20.5, 0],
                    "ix": 1
                },
                "s": {
                    "a": 0,
                    "k": [190, 190, 100],
                    "ix": 6
                }
            },
            "ao": 0,
            "ef": [{
                "ty": 21,
                "nm": "Riempimento",
                "np": 9,
                "mn": "ADBE Fill",
                "ix": 1,
                "en": 1,
                "ef": [{
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
                        "k": [0.160784319043, 0.572549045086, 0.75686275959, 1],
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
                }]
            }],
            "shapes": [{
                "ty": "gr",
                "it": [{
                    "ind": 0,
                    "ty": "sh",
                    "ix": 1,
                    "ks": {
                        "a": 0,
                        "k": {
                            "i": [
                                [0, -0.817],
                                [3.411, 0],
                                [0, 3.406],
                                [-0.289, 0.715],
                                [0, 0],
                                [0, 0],
                                [-1.196, 0],
                                [0, 0],
                                [0, 1.196],
                                [0, 0],
                                [0, 0]
                            ],
                            "o": [
                                [0, 3.406],
                                [-3.406, 0],
                                [0, -0.817],
                                [0, 0],
                                [0, 0],
                                [0, 1.196],
                                [0, 0],
                                [1.195, 0],
                                [0, 0],
                                [0, 0],
                                [0.289, 0.715]
                            ],
                            "v": [
                                [6.18, -3.388],
                                [0, 2.791],
                                [-6.175, -3.388],
                                [-5.722, -5.705],
                                [-9.094, -5.705],
                                [-9.094, 3.545],
                                [-6.929, 5.705],
                                [6.93, 5.705],
                                [9.094, 3.545],
                                [9.094, -5.705],
                                [5.723, -5.705]
                            ],
                            "c": true
                        },
                        "ix": 2
                    },
                    "nm": "Path 1",
                    "mn": "ADBE Vector Shape - Group",
                    "hd": false
                }, {
                    "ind": 1,
                    "ty": "sh",
                    "ix": 2,
                    "ks": {
                        "a": 0,
                        "k": {
                            "i": [
                                [0, 0]
                            ],
                            "o": [
                                [0, 0]
                            ],
                            "v": [
                                [6.18, -3.388]
                            ],
                            "c": false
                        },
                        "ix": 2
                    },
                    "nm": "Path 2",
                    "mn": "ADBE Vector Shape - Group",
                    "hd": false
                }, {
                    "ty": "mm",
                    "mm": 1,
                    "nm": "Merge Paths 1",
                    "mn": "ADBE Vector Filter - Merge",
                    "hd": false
                }, {
                    "ty": "fl",
                    "c": {
                        "a": 0,
                        "k": [0, 0, 0, 1],
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
                        "k": [19.859, 23.526],
                        "ix": 2
                    },
                    "a": {
                        "a": 0,
                        "k": [0, 0],
                        "ix": 1
                    },
                    "s": {
                        "a": 0,
                        "k": [100, 100],
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
                }],
                "nm": "Group 1",
                "np": 4,
                "cix": 2,
                "bm": 0,
                "ix": 1,
                "mn": "ADBE Vector Group",
                "hd": false
            }, {
                "ty": "gr",
                "it": [{
                    "ind": 0,
                    "ty": "sh",
                    "ix": 1,
                    "ks": {
                        "a": 0,
                        "k": {
                            "i": [
                                [10.953, 0],
                                [0, -10.949],
                                [-10.949, 0],
                                [0, 10.953]
                            ],
                            "o": [
                                [-10.949, 0],
                                [0, 10.953],
                                [10.953, 0],
                                [0, -10.949]
                            ],
                            "v": [
                                [-0.003, -19.861],
                                [-19.861, -0.001],
                                [-0.003, 19.861],
                                [19.861, -0.001]
                            ],
                            "c": true
                        },
                        "ix": 2
                    },
                    "nm": "Path 1",
                    "mn": "ADBE Vector Shape - Group",
                    "hd": false
                }, {
                    "ind": 1,
                    "ty": "sh",
                    "ix": 2,
                    "ks": {
                        "a": 0,
                        "k": {
                            "i": [
                                [0, 0],
                                [0, 0],
                                [2.41, 0],
                                [0, 0],
                                [0, 2.407],
                                [0, 0],
                                [-2.407, 0],
                                [0, 0],
                                [0, -2.41]
                            ],
                            "o": [
                                [0, 0],
                                [0, 2.407],
                                [0, 0],
                                [-2.407, 0],
                                [0, 0],
                                [0, -2.41],
                                [0, 0],
                                [2.41, 0],
                                [0, 0]
                            ],
                            "v": [
                                [11.294, -2.318],
                                [11.294, 6.932],
                                [6.928, 11.296],
                                [-6.932, 11.296],
                                [-11.296, 6.932],
                                [-11.296, -6.928],
                                [-6.932, -11.295],
                                [6.928, -11.295],
                                [11.294, -6.928]
                            ],
                            "c": true
                        },
                        "ix": 2
                    },
                    "nm": "Path 2",
                    "mn": "ADBE Vector Shape - Group",
                    "hd": false
                }, {
                    "ind": 2,
                    "ty": "sh",
                    "ix": 3,
                    "ks": {
                        "a": 0,
                        "k": {
                            "i": [
                                [0, 0]
                            ],
                            "o": [
                                [0, 0]
                            ],
                            "v": [
                                [11.294, -2.318]
                            ],
                            "c": false
                        },
                        "ix": 2
                    },
                    "nm": "Path 3",
                    "mn": "ADBE Vector Shape - Group",
                    "hd": false
                }, {
                    "ty": "mm",
                    "mm": 1,
                    "nm": "Merge Paths 1",
                    "mn": "ADBE Vector Filter - Merge",
                    "hd": false
                }, {
                    "ty": "fl",
                    "c": {
                        "a": 0,
                        "k": [0, 0, 0, 1],
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
                        "k": [19.861, 20.139],
                        "ix": 2
                    },
                    "a": {
                        "a": 0,
                        "k": [0, 0],
                        "ix": 1
                    },
                    "s": {
                        "a": 0,
                        "k": [100, 100],
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
                }],
                "nm": "Group 2",
                "np": 5,
                "cix": 2,
                "bm": 0,
                "ix": 2,
                "mn": "ADBE Vector Group",
                "hd": false
            }, {
                "ty": "gr",
                "it": [{
                    "ind": 0,
                    "ty": "sh",
                    "ix": 1,
                    "ks": {
                        "a": 0,
                        "k": {
                            "i": [
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0]
                            ],
                            "o": [
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0],
                                [0, 0]
                            ],
                            "v": [
                                [1.916, 1.908],
                                [1.916, -1.92],
                                [1.416, -1.92],
                                [-1.916, -1.908],
                                [-1.9, 1.92]
                            ],
                            "c": true
                        },
                        "ix": 2
                    },
                    "nm": "Path 1",
                    "mn": "ADBE Vector Shape - Group",
                    "hd": false
                }, {
                    "ind": 1,
                    "ty": "sh",
                    "ix": 2,
                    "ks": {
                        "a": 0,
                        "k": {
                            "i": [
                                [0, 0]
                            ],
                            "o": [
                                [0, 0]
                            ],
                            "v": [
                                [1.916, 1.908]
                            ],
                            "c": false
                        },
                        "ix": 2
                    },
                    "nm": "Path 2",
                    "mn": "ADBE Vector Shape - Group",
                    "hd": false
                }, {
                    "ty": "mm",
                    "mm": 1,
                    "nm": "Merge Paths 1",
                    "mn": "ADBE Vector Filter - Merge",
                    "hd": false
                }, {
                    "ty": "fl",
                    "c": {
                        "a": 0,
                        "k": [0, 0, 0, 1],
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
                        "k": [26.627, 13.366],
                        "ix": 2
                    },
                    "a": {
                        "a": 0,
                        "k": [0, 0],
                        "ix": 1
                    },
                    "s": {
                        "a": 0,
                        "k": [100, 100],
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
                }],
                "nm": "Group 3",
                "np": 4,
                "cix": 2,
                "bm": 0,
                "ix": 3,
                "mn": "ADBE Vector Group",
                "hd": false
            }, {
                "ty": "gr",
                "it": [{
                    "ind": 0,
                    "ty": "sh",
                    "ix": 1,
                    "ks": {
                        "a": 0,
                        "k": {
                            "i": [
                                [-2.191, 0],
                                [0, 2.195],
                                [0.469, 0.653],
                                [1.329, 0],
                                [0.722, -1.004],
                                [0.004, -0.864]
                            ],
                            "o": [
                                [2.192, 0],
                                [0, -0.864],
                                [-0.723, -1],
                                [-1.324, 0],
                                [-0.473, 0.653],
                                [0, 2.195]
                            ],
                            "v": [
                                [-0.001, 3.975],
                                [3.977, -0.001],
                                [3.227, -2.318],
                                [-0.001, -3.975],
                                [-3.223, -2.318],
                                [-3.977, -0.001]
                            ],
                            "c": true
                        },
                        "ix": 2
                    },
                    "nm": "Path 1",
                    "mn": "ADBE Vector Shape - Group",
                    "hd": false
                }, {
                    "ind": 1,
                    "ty": "sh",
                    "ix": 2,
                    "ks": {
                        "a": 0,
                        "k": {
                            "i": [
                                [0, 0]
                            ],
                            "o": [
                                [0, 0]
                            ],
                            "v": [
                                [-0.001, 3.975]
                            ],
                            "c": false
                        },
                        "ix": 2
                    },
                    "nm": "Path 2",
                    "mn": "ADBE Vector Shape - Group",
                    "hd": false
                }, {
                    "ty": "mm",
                    "mm": 1,
                    "nm": "Merge Paths 1",
                    "mn": "ADBE Vector Filter - Merge",
                    "hd": false
                }, {
                    "ty": "fl",
                    "c": {
                        "a": 0,
                        "k": [0, 0, 0, 1],
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
                        "k": [19.859, 20.139],
                        "ix": 2
                    },
                    "a": {
                        "a": 0,
                        "k": [0, 0],
                        "ix": 1
                    },
                    "s": {
                        "a": 0,
                        "k": [100, 100],
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
                }],
                "nm": "Group 4",
                "np": 4,
                "cix": 2,
                "bm": 0,
                "ix": 4,
                "mn": "ADBE Vector Group",
                "hd": false
            }],
            "ip": 0,
            "op": 150.000006109625,
            "st": 0,
            "bm": 0
        }]
    }, {
        "id": "comp_5",
        "layers": [{
            "ddd": 0,
            "ind": 2,
            "ty": 4,
            "nm": "user avatar",
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
                    "k": [40, 40, 0],
                    "ix": 2
                },
                "a": {
                    "a": 0,
                    "k": [20, 20.5, 0],
                    "ix": 1
                },
                "s": {
                    "a": 0,
                    "k": [190, 190, 100],
                    "ix": 6
                }
            },
            "ao": 0,
            "ef": [{
                "ty": 21,
                "nm": "Riempimento",
                "np": 9,
                "mn": "ADBE Fill",
                "ix": 1,
                "en": 1,
                "ef": [{
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
                        "k": [0.160784319043, 0.572549045086, 0.75686275959, 1],
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
                }]
            }],
            "shapes": [{
                "ty": "gr",
                "it": [{
                    "ind": 0,
                    "ty": "sh",
                    "ix": 1,
                    "ks": {
                        "a": 0,
                        "k": {
                            "i": [
                                [10.953, 0],
                                [0, -10.953],
                                [-10.949, 0],
                                [0, 10.949]
                            ],
                            "o": [
                                [-10.949, 0],
                                [0, 10.949],
                                [10.953, 0],
                                [0, -10.953]
                            ],
                            "v": [
                                [-0.003, -19.861],
                                [-19.861, 0.002],
                                [-0.003, 19.861],
                                [19.861, 0.002]
                            ],
                            "c": true
                        },
                        "ix": 2
                    },
                    "nm": "Path 1",
                    "mn": "ADBE Vector Shape - Group",
                    "hd": false
                }, {
                    "ind": 1,
                    "ty": "sh",
                    "ix": 2,
                    "ks": {
                        "a": 0,
                        "k": {
                            "i": [
                                [2.723, -2.851],
                                [0, 0],
                                [1.676, 0.719],
                                [1.172, 0.571],
                                [0.047, 0.441],
                                [0, 0],
                                [-0.137, 1.297],
                                [0, 0],
                                [-0.047, 0.293],
                                [0, 0],
                                [0.32, 0],
                                [-0.004, 0.035],
                                [-0.015, 0.223],
                                [-0.004, 0.192],
                                [0.262, 0.453],
                                [0.554, 0.527],
                                [1.535, -1.179],
                                [0.899, -1.051],
                                [0.132, -0.645],
                                [0.019, -0.523],
                                [-0.109, -0.434],
                                [0, -0.399],
                                [0, 0],
                                [-0.32, 0],
                                [0, 0],
                                [-0.824, -0.805],
                                [0, 0],
                                [0.395, -0.196],
                                [0.668, -0.277],
                                [0, -2.707],
                                [0, 0],
                                [0, 4.16],
                                [-8.746, 0],
                                [0, -8.746]
                            ],
                            "o": [
                                [0, 0],
                                [0, -2.707],
                                [-0.606, -0.258],
                                [-0.398, -0.195],
                                [0, 0],
                                [0.899, -0.836],
                                [0, 0],
                                [0.317, 0],
                                [0, 0],
                                [0.039, -0.418],
                                [0.008, -0.043],
                                [0.043, -0.235],
                                [0.02, -0.18],
                                [0.035, -0.925],
                                [-0.261, -0.633],
                                [-1.555, -1.469],
                                [-1.043, -0.179],
                                [-0.488, 0.574],
                                [-0.118, 0.402],
                                [-0.024, 0.59],
                                [-0.304, 0.019],
                                [0, 0],
                                [0.047, 0.293],
                                [0, 0],
                                [0.289, 1.402],
                                [0, 0],
                                [-0.043, 0.442],
                                [-1.136, 0.554],
                                [-1.579, 0.649],
                                [0, 0],
                                [-2.629, -2.833],
                                [0, -8.746],
                                [8.746, 0],
                                [0, 4.242]
                            ],
                            "v": [
                                [11.45, 10.947],
                                [11.45, 10.162],
                                [6.646, 5.748],
                                [3.725, 4.369],
                                [2.924, 3.217],
                                [2.795, 1.936],
                                [4.639, -1.361],
                                [4.842, -1.361],
                                [5.505, -1.892],
                                [5.826, -3.857],
                                [5.15, -4.529],
                                [5.169, -4.65],
                                [5.251, -5.334],
                                [5.294, -5.889],
                                [4.911, -8.08],
                                [3.693, -9.857],
                                [-1.193, -10.717],
                                [-4.378, -9.369],
                                [-5.303, -7.494],
                                [-5.514, -6.08],
                                [-5.37, -4.521],
                                [-5.983, -3.853],
                                [-5.666, -1.892],
                                [-4.998, -1.361],
                                [-4.818, -1.361],
                                [-2.959, 1.998],
                                [-3.085, 3.236],
                                [-3.881, 4.389],
                                [-6.803, 5.752],
                                [-11.608, 10.162],
                                [-11.608, 10.776],
                                [-15.862, 0.002],
                                [0.001, -15.857],
                                [15.861, 0.002]
                            ],
                            "c": true
                        },
                        "ix": 2
                    },
                    "nm": "Path 2",
                    "mn": "ADBE Vector Shape - Group",
                    "hd": false
                }, {
                    "ind": 2,
                    "ty": "sh",
                    "ix": 3,
                    "ks": {
                        "a": 0,
                        "k": {
                            "i": [
                                [0, 0]
                            ],
                            "o": [
                                [0, 0]
                            ],
                            "v": [
                                [11.45, 10.947]
                            ],
                            "c": false
                        },
                        "ix": 2
                    },
                    "nm": "Path 3",
                    "mn": "ADBE Vector Shape - Group",
                    "hd": false
                }, {
                    "ty": "mm",
                    "mm": 1,
                    "nm": "Merge Paths 1",
                    "mn": "ADBE Vector Filter - Merge",
                    "hd": false
                }, {
                    "ty": "fl",
                    "c": {
                        "a": 0,
                        "k": [0, 0, 0, 1],
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
                        "k": [19.861, 20.138],
                        "ix": 2
                    },
                    "a": {
                        "a": 0,
                        "k": [0, 0],
                        "ix": 1
                    },
                    "s": {
                        "a": 0,
                        "k": [100, 100],
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
                }],
                "nm": "Group 1",
                "np": 5,
                "cix": 2,
                "bm": 0,
                "ix": 1,
                "mn": "ADBE Vector Group",
                "hd": false
            }],
            "ip": 0,
            "op": 612.000024927271,
            "st": 0,
            "bm": 0
        }]
    }, {
        "id": "comp_6",
        "layers": [{
            "ddd": 0,
            "ind": 1,
            "ty": 5,
            "nm": "TEXT",
            "sr": 1,
            "ks": {
                "o": {
                    "a": 1,
                    "k": [{
                        "i": {
                            "x": [0.667],
                            "y": [1]
                        },
                        "o": {
                            "x": [0.333],
                            "y": [0]
                        },
                        "t": 172,
                        "s": [100]
                    }, {
                        "i": {
                            "x": [0.667],
                            "y": [1]
                        },
                        "o": {
                            "x": [0.333],
                            "y": [0]
                        },
                        "t": 186,
                        "s": [0]
                    }, {
                        "t": 198.000008064705,
                        "s": [100]
                    }],
                    "ix": 11
                },
                "r": {
                    "a": 0,
                    "k": 0,
                    "ix": 10
                },
                "p": {
                    "a": 0,
                    "k": [54.607, 40.469, 0],
                    "ix": 2
                },
                "a": {
                    "a": 0,
                    "k": [2.94, -10.71, 0],
                    "ix": 1
                },
                "s": {
                    "a": 0,
                    "k": [100, 100, 100],
                    "ix": 6
                }
            },
            "ao": 0,
            "ef": [{
                "ty": 21,
                "nm": "Riempimento",
                "np": 9,
                "mn": "ADBE Fill",
                "ix": 1,
                "en": 1,
                "ef": [{
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
                        "k": [1, 0, 0, 1],
                        "ix": 3,
                        "x": "var $bm_rt;\n$bm_rt = comp('Social Edit').layer('Color Controller').effect('Color 01')('ADBE Color Control-0001');"
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
                }]
            }],
            "t": {
                "d": {
                    "k": [{
                        "s": {
                            "s": 42,
                            "f": "Montserrat-SemiBold",
                            "t": social1_tit1,//Seguici!
                            "j": 0,
                            "tr": -60,
                            "lh": 50.4,
                            "ls": 0,
                            "fc": [0.941, 0.937, 0.918]
                        },
                        "t": 0
                    }, {
                        "s": {
                            "s": 42,
                            "f": "Montserrat-SemiBold",
                            "t": social1_tit2,//Riguarda le puntate
                            "j": 0,
                            "tr": -60,
                            "lh": 50.4,
                            "ls": 0,
                            "fc": [0.941, 0.937, 0.918]
                        },
                        "t": 186.000007575935
                    }]
                },
                "p": {},
                "m": {
                    "g": 1,
                    "a": {
                        "a": 0,
                        "k": [0, 0],
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
            "ind": 2,
            "ty": 2,
            "nm": "Brush 1",
            "refId": "image_1",
            "sr": 1,
            "ks": {
                "o": {
                    "a": 0,
                    "k": 100,
                    "ix": 11
                },
                "r": {
                    "a": 0,
                    "k": -2,
                    "ix": 10
                },
                "p": {
                    "a": 0,
                    "k": [219.5, 46.5, 0],
                    "ix": 2
                },
                "a": {
                    "a": 0,
                    "k": [1789.5, 384, 0],
                    "ix": 1
                },
                "s": {
                    "a": 0,
                    "k": [16.298, 14.918, 100],
                    "ix": 6
                }
            },
            "ao": 0,
            "ef": [{
                "ty": 21,
                "nm": "Riempimento",
                "np": 9,
                "mn": "ADBE Fill",
                "ix": 1,
                "en": 1,
                "ef": [{
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
                        "k": [1, 0, 0, 1],
                        "ix": 3,
                        "x": "var $bm_rt;\n$bm_rt = comp('Social Edit').layer('Color Controller').effect('Color 02')('ADBE Color Control-0001');"
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
                }]
            }],
            "ip": 0,
            "op": 1978.00008056559,
            "st": 0,
            "bm": 0
        }]
    }, {
        "id": "comp_7",
        "layers": [{
            "ddd": 0,
            "ind": 1,
            "ty": 5,
            "nm": "TEXT",
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
                    "k": [39.607, 37.99, 0],
                    "ix": 2
                },
                "a": {
                    "a": 0,
                    "k": [2.94, -10.71, 0],
                    "ix": 1
                },
                "s": {
                    "a": 0,
                    "k": [100, 100, 100],
                    "ix": 6
                }
            },
            "ao": 0,
            "ef": [{
                "ty": 21,
                "nm": "Riempimento",
                "np": 9,
                "mn": "ADBE Fill",
                "ix": 1,
                "en": 1,
                "ef": [{
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
                        "k": [1, 0, 0, 1],
                        "ix": 3,
                        "x": "var $bm_rt;\n$bm_rt = comp('Social Edit').layer('Color Controller').effect('Color 01')('ADBE Color Control-0001');"
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
                }]
            }],
            "t": {
                "d": {
                    "k": [{
                        "s": {
                            "s": 42,
                            "f": "Montserrat-SemiBold",
                            "t": social1_des1,//RadioPanetti
                            "j": 0,
                            "tr": -60,
                            "lh": 50.4,
                            "ls": 0,
                            "fc": [0.941, 0.937, 0.918]
                        },
                        "t": 0
                    }, {
                        "s": {
                            "s": 42,
                            "f": "Montserrat-SemiBold",
                            "t": social1_des2,//Radio Panetti
                            "j": 0,
                            "tr": -60,
                            "lh": 50.4,
                            "ls": 0,
                            "fc": [0.941, 0.937, 0.918]
                        },
                        "t": 40.0000016292334
                    }, {
                        "s": {
                            "s": 42,
                            "f": "Montserrat-SemiBold",
                            "t": social1_des3,//@RadioPanettiOfficial
                            "j": 0,
                            "tr": -60,
                            "lh": 50.4,
                            "ls": 0,
                            "fc": [0.941, 0.937, 0.918]
                        },
                        "t": 81.0000032991976
                    }, {
                        "s": {
                            "s": 42,
                            "f": "Montserrat-SemiBold",
                            "t": social1_des4,//radiopanetti.it
                            "j": 0,
                            "tr": -60,
                            "lh": 50.4,
                            "ls": 0,
                            "fc": [0.941, 0.937, 0.918]
                        },
                        "t": 121.000004928431
                    }, {
                        "s": {
                            "s": 42,
                            "f": "Montserrat-SemiBold",
                            "t": social1_des5,//play.radiopanetti.it
                            "j": 0,
                            "tr": -60,
                            "lh": 50.4,
                            "ls": 0,
                            "fc": [0.941, 0.937, 0.918]
                        },
                        "t": 162.000006598395
                    }]
                },
                "p": {},
                "m": {
                    "g": 1,
                    "a": {
                        "a": 0,
                        "k": [0, 0],
                        "ix": 2
                    }
                },
                "a": [{
                    "nm": "AK_Animator-IN",
                    "s": {
                        "t": 0,
                        "xe": {
                            "a": 0,
                            "k": -81,
                            "ix": 7
                        },
                        "ne": {
                            "a": 0,
                            "k": 71,
                            "ix": 8
                        },
                        "a": {
                            "a": 0,
                            "k": 100,
                            "ix": 4
                        },
                        "b": 1,
                        "rn": 1,
                        "sh": 2,
                        "o": {
                            "a": 1,
                            "k": [{
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": -6,
                                "s": [-100]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": -5,
                                "s": [-94.439]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": -4,
                                "s": [-88.878]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": -3,
                                "s": [-83.317]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": -2,
                                "s": [-77.755]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": -1,
                                "s": [-72.194]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 0,
                                "s": [-66.633]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 1,
                                "s": [-61.072]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 2,
                                "s": [-55.511]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 3,
                                "s": [-49.95]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 4,
                                "s": [-44.388]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 5,
                                "s": [-38.827]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 6,
                                "s": [-33.266]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 7,
                                "s": [-27.705]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 8,
                                "s": [-22.144]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 9,
                                "s": [-16.583]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 10,
                                "s": [-11.022]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 11,
                                "s": [-5.46]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 12,
                                "s": [0.101]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 13,
                                "s": [5.662]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 14,
                                "s": [11.223]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 15,
                                "s": [16.784]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 16,
                                "s": [22.345]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 17,
                                "s": [27.907]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 18,
                                "s": [33.468]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 19,
                                "s": [39.029]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 20,
                                "s": [44.59]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 21,
                                "s": [50.151]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 22,
                                "s": [55.712]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 23,
                                "s": [61.274]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 24,
                                "s": [66.835]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 25,
                                "s": [72.396]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 26,
                                "s": [77.957]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 27,
                                "s": [83.518]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.836]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 28,
                                "s": [89.079]
                            }, {
                                "i": {
                                    "x": [0.667],
                                    "y": [1]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.17]
                                },
                                "t": 29,
                                "s": [94.64]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.855]
                                },
                                "o": {
                                    "x": [0.333],
                                    "y": [0]
                                },
                                "t": 30,
                                "s": [100]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [-0.318]
                                },
                                "t": 40,
                                "s": [-22.144]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 41,
                                "s": [-16.583]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 42,
                                "s": [-11.022]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 43,
                                "s": [-5.46]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 44,
                                "s": [0.101]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 45,
                                "s": [5.662]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 46,
                                "s": [11.223]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 47,
                                "s": [16.784]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 48,
                                "s": [22.345]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 49,
                                "s": [27.907]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 50,
                                "s": [33.468]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 51,
                                "s": [39.029]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 52,
                                "s": [44.59]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 53,
                                "s": [50.151]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 54,
                                "s": [55.712]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 55,
                                "s": [61.274]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 56,
                                "s": [66.835]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 57,
                                "s": [72.396]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 58,
                                "s": [77.957]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 59,
                                "s": [83.518]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.836]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 60,
                                "s": [89.079]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.917]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.17]
                                },
                                "t": 61,
                                "s": [94.64]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [1]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.447]
                                },
                                "t": 62,
                                "s": [100]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [1]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0]
                                },
                                "t": 63,
                                "s": [100]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [1]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0]
                                },
                                "t": 64,
                                "s": [100]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [1]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0]
                                },
                                "t": 65,
                                "s": [100]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [1]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0]
                                },
                                "t": 66,
                                "s": [100]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [1]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0]
                                },
                                "t": 67,
                                "s": [100]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [1]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0]
                                },
                                "t": 68,
                                "s": [100]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [1]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0]
                                },
                                "t": 69,
                                "s": [100]
                            }, {
                                "i": {
                                    "x": [0.667],
                                    "y": [1]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0]
                                },
                                "t": 70,
                                "s": [100]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.853]
                                },
                                "o": {
                                    "x": [0.333],
                                    "y": [0]
                                },
                                "t": 71,
                                "s": [100]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [-0.454]
                                },
                                "t": 81,
                                "s": [-72.194]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 82,
                                "s": [-66.633]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 83,
                                "s": [-61.072]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 84,
                                "s": [-55.511]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 85,
                                "s": [-49.95]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 86,
                                "s": [-44.388]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 87,
                                "s": [-38.827]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 88,
                                "s": [-33.266]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 89,
                                "s": [-27.705]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 90,
                                "s": [-22.144]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 91,
                                "s": [-16.583]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 92,
                                "s": [-11.022]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 93,
                                "s": [-5.46]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 94,
                                "s": [0.101]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 95,
                                "s": [5.662]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 96,
                                "s": [11.223]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 97,
                                "s": [16.784]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 98,
                                "s": [22.345]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 99,
                                "s": [27.907]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 100,
                                "s": [33.468]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 101,
                                "s": [39.029]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 102,
                                "s": [44.59]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 103,
                                "s": [50.151]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 104,
                                "s": [55.712]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 105,
                                "s": [61.274]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 106,
                                "s": [66.835]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 107,
                                "s": [72.396]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 108,
                                "s": [77.957]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 109,
                                "s": [83.518]
                            }, {
                                "i": {
                                    "x": [0.667],
                                    "y": [1]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 110,
                                "s": [89.079]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.854]
                                },
                                "o": {
                                    "x": [0.333],
                                    "y": [0]
                                },
                                "t": 111,
                                "s": [94.64]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [-0.278]
                                },
                                "t": 122,
                                "s": [-22.144]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 123,
                                "s": [-16.583]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 124,
                                "s": [-11.022]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 125,
                                "s": [-5.46]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 126,
                                "s": [0.101]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 127,
                                "s": [5.662]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 128,
                                "s": [11.223]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 129,
                                "s": [16.784]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 130,
                                "s": [22.345]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 131,
                                "s": [27.907]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 132,
                                "s": [33.468]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 133,
                                "s": [39.029]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 134,
                                "s": [44.59]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 135,
                                "s": [50.151]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 136,
                                "s": [55.712]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 137,
                                "s": [61.274]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 138,
                                "s": [66.835]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 139,
                                "s": [72.396]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 140,
                                "s": [77.957]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 141,
                                "s": [83.518]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.836]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 142,
                                "s": [89.079]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.917]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.17]
                                },
                                "t": 143,
                                "s": [94.64]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [1]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.447]
                                },
                                "t": 144,
                                "s": [100]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [1]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0]
                                },
                                "t": 145,
                                "s": [100]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [1]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0]
                                },
                                "t": 146,
                                "s": [100]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [1]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0]
                                },
                                "t": 147,
                                "s": [100]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [1]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0]
                                },
                                "t": 148,
                                "s": [100]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [1]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0]
                                },
                                "t": 149,
                                "s": [100]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [1]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0]
                                },
                                "t": 150,
                                "s": [100]
                            }, {
                                "i": {
                                    "x": [0.667],
                                    "y": [1]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0]
                                },
                                "t": 151,
                                "s": [100]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.855]
                                },
                                "o": {
                                    "x": [0.333],
                                    "y": [0]
                                },
                                "t": 152,
                                "s": [100]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [-0.318]
                                },
                                "t": 162,
                                "s": [-22.144]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 163,
                                "s": [-16.583]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 164,
                                "s": [-11.022]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 165,
                                "s": [-5.46]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 166,
                                "s": [0.101]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 167,
                                "s": [5.662]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 168,
                                "s": [11.223]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 169,
                                "s": [16.784]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 170,
                                "s": [22.345]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 171,
                                "s": [27.907]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 172,
                                "s": [33.468]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 173,
                                "s": [39.029]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 174,
                                "s": [44.59]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 175,
                                "s": [50.151]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 176,
                                "s": [55.712]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 177,
                                "s": [61.274]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 178,
                                "s": [66.835]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 179,
                                "s": [72.396]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 180,
                                "s": [77.957]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 181,
                                "s": [83.518]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.836]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 182,
                                "s": [89.079]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.917]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.17]
                                },
                                "t": 183,
                                "s": [94.64]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [1]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.447]
                                },
                                "t": 184,
                                "s": [100]
                            }, {
                                "t": 185.000007535204,
                                "s": [100]
                            }],
                            "ix": 3
                        },
                        "r": 1
                    },
                    "a": {
                        "p": {
                            "a": 0,
                            "k": [0, 334, 0],
                            "ix": 2
                        },
                        "s": {
                            "a": 0,
                            "k": [0, 100, 100],
                            "ix": 3
                        },
                        "o": {
                            "a": 0,
                            "k": 0,
                            "ix": 9
                        },
                        "bl": {
                            "a": 0,
                            "k": [0, 20],
                            "ix": 95
                        }
                    }
                }]
            },
            "ip": -6.00000024438501,
            "op": 894.000036413367,
            "st": -6.00000024438501,
            "bm": 0
        }, {
            "ddd": 0,
            "ind": 2,
            "ty": 2,
            "nm": "Brush 1",
            "refId": "image_1",
            "sr": 1,
            "ks": {
                "o": {
                    "a": 0,
                    "k": 100,
                    "ix": 11
                },
                "r": {
                    "a": 0,
                    "k": -2,
                    "ix": 10
                },
                "p": {
                    "a": 0,
                    "k": [244.5, 42.5, 0],
                    "ix": 2
                },
                "a": {
                    "a": 0,
                    "k": [1789.5, 384, 0],
                    "ix": 1
                },
                "s": {
                    "a": 0,
                    "k": [17.663, 14.137, 100],
                    "ix": 6
                }
            },
            "ao": 0,
            "ef": [{
                "ty": 21,
                "nm": "Riempimento",
                "np": 9,
                "mn": "ADBE Fill",
                "ix": 1,
                "en": 1,
                "ef": [{
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
                        "k": [1, 0, 0, 1],
                        "ix": 3,
                        "x": "var $bm_rt;\n$bm_rt = comp('Social Edit').layer('Color Controller').effect('Color 03')('ADBE Color Control-0001');"
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
                }]
            }],
            "ip": 0,
            "op": 1978.00008056559,
            "st": 0,
            "bm": 0
        }]
    }],
    "fonts": {
        "list": [{
            "origin": 1,
            "fPath": "https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap",
            "fClass": "",
            "fFamily": "Montserrat",
            "fWeight": "600",
            "fStyle": "SemiBold",
            "fName": "Montserrat-SemiBold",
            "ascent": 74.1989135742188
        }]
    },
    "layers": [{
        "ddd": 0,
        "ind": 1,
        "ty": 0,
        "nm": "Social Edit",
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
                "k": [434, 948, 0],
                "ix": 2
            },
            "a": {
                "a": 0,
                "k": [400, 150, 0],
                "ix": 1
            },
            "s": {
                "a": 0,
                "k": [105.333, 105.333, 100],
                "ix": 6
            }
        },
        "ao": 0,
        "w": 800,
        "h": 300,
        "ip": 0,
        "op": 600.000024438501,
        "st": 0,
        "bm": 0
    }],
    "markers": []
};
var params = {
container: document.getElementById('lottie'),
renderer: 'svg',
loop: false,
autoplay: true,
animationData: animationData
};

    var anim;

    anim = lottie.loadAnimation(params);

    anim.addEventListener('complete', function(){
/*      var duration = (anim.frameRate*100)/anim.totalFrames;
      console.log(duration);*/
    anim.destroy()
    })
  }
}
