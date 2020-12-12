var bc = new BroadcastChannel('obs-lower-thirds-channel');
bc.onmessage = function (ev) {
  received_data=ev.data.split("|");
  var animazione = received_data[0];
  var nome = received_data[1];
  var funzione = received_data[2];
  var position = received_data[3];
if (animazione == "lower3"){
  var lottiecolors = [
      [(colori.lower3.sfondo1[0]/255), (colori.lower3.sfondo1[1]/255), (colori.lower3.sfondo1[2]/255)], //Ruolo sfondo
      [(colori.lower3.text1[0]/255), (colori.lower3.text1[1]/255), (colori.lower3.text1[2]/255)], //Nome
      [(colori.lower3.text2[0]/255), (colori.lower3.text2[1]/255), (colori.lower3.text2[2]/255)], //Ruolo
  ];
  console.log ('Name: ' + received_data[1] + ', Function: ' + received_data[2] + ', Position: ' + received_data[3]);
  console.log("Lottie Colors");
  console.log (JSON.stringify(lottiecolors, null, 4));

if (position == 'left') {document.getElementById("lottie").classList.remove("right");};
if (position == 'right') {document.getElementById("lottie").classList.add("right");};


var animationData = {
    "v": "5.7.1",
    "fr": 30,
    "ip": 0,
    "op": 600,
    "w": 3840,
    "h": 2160,
    "nm": "12",
    "ddd": 0,
    "assets": [],
    "fonts": {
        "list": [{
            "origin": 1,
            "fPath": "https://fonts.googleapis.com/css2?family=PT+Sans&display=swap",
            "fClass": "",
            "fFamily": "PT Sans",
            "fWeight": "",
            "fStyle": "Regular",
            "fName": "PTSans-Regular",
            "ascent": 70.0096948239952
        }, {
            "origin": 1,
            "fPath": "https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&display=swap",
            "fClass": "",
            "fFamily": "PT Sans",
            "fWeight": "700",
            "fStyle": "Bold",
            "fName": "PTSans-Bold",
            "ascent": 70.0096948239952
        }]
    },
    "layers": [{
        "ddd": 0,
        "ind": 1,
        "ty": 3,
        "nm": "CONTROL PANEL",
        "hd": true,
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
                "k": [1920, 1080, 0],
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
            "nm": "---------------- EDIT COLOR",
            "np": 3,
            "mn": "ADBE Checkbox Control",
            "ix": 1,
            "en": 1,
            "ef": [{
                "ty": 7,
                "nm": "Casella",
                "mn": "ADBE Checkbox Control-0001",
                "ix": 1,
                "v": {
                    "a": 0,
                    "k": 0,
                    "ix": 1
                }
            }]
        }, {
            "ty": 5,
            "nm": "Text 01 Color",
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
                    "k": [0.964705884457, 0.964705884457, 0.964705884457, 1],
                    "ix": 1
                }
            }]
        }, {
            "ty": 5,
            "nm": "Text 02 Color",
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
                    "k": [1, 1, 1, 1],
                    "ix": 1
                }
            }]
        }, {
            "ty": 5,
            "nm": "Shape Color",
            "np": 3,
            "mn": "ADBE Color Control",
            "ix": 4,
            "en": 1,
            "ef": [{
                "ty": 2,
                "nm": "Colore",
                "mn": "ADBE Color Control-0001",
                "ix": 1,
                "v": {
                    "a": 0,
                    "k": [lottiecolors[0][0], lottiecolors[0][1], lottiecolors[0][2]],
                    "ix": 1
                }
            }]
        }, {
            "ty": 5,
            "nm": "Runing Line 1 Color",
            "np": 3,
            "mn": "ADBE Color Control",
            "ix": 5,
            "en": 1,
            "ef": [{
                "ty": 2,
                "nm": "Colore",
                "mn": "ADBE Color Control-0001",
                "ix": 1,
                "v": {
                    "a": 0,
                    "k": [lottiecolors[0][0], lottiecolors[0][1], lottiecolors[0][2]],
                    "ix": 1
                }
            }]
        }, {
            "ty": 5,
            "nm": "Runing Line 2 Color",
            "np": 3,
            "mn": "ADBE Color Control",
            "ix": 6,
            "en": 1,
            "ef": [{
                "ty": 2,
                "nm": "Colore",
                "mn": "ADBE Color Control-0001",
                "ix": 1,
                "v": {
                    "a": 0,
                    "k": [0.239215686917, 0.749019622803, 1, 1],
                    "ix": 1
                }
            }]
        }, {
            "ty": 5,
            "nm": "---------------- TEXT POSITION",
            "np": 3,
            "mn": "ADBE Checkbox Control",
            "ix": 7,
            "en": 1,
            "ef": [{
                "ty": 7,
                "nm": "Casella",
                "mn": "ADBE Checkbox Control-0001",
                "ix": 1,
                "v": {
                    "a": 0,
                    "k": 0,
                    "ix": 1
                }
            }]
        }, {
            "ty": 5,
            "nm": "Text 01 Size",
            "np": 3,
            "mn": "ADBE Slider Control",
            "ix": 8,
            "en": 1,
            "ef": [{
                "ty": 0,
                "nm": "Cursore",
                "mn": "ADBE Slider Control-0001",
                "ix": 1,
                "v": {
                    "a": 0,
                    "k": 100,
                    "ix": 1
                }
            }]
        }, {
            "ty": 5,
            "nm": "Text 01 Position X",
            "np": 3,
            "mn": "ADBE Slider Control",
            "ix": 9,
            "en": 1,
            "ef": [{
                "ty": 0,
                "nm": "Cursore",
                "mn": "ADBE Slider Control-0001",
                "ix": 1,
                "v": {
                    "a": 0,
                    "k": 547.158,
                    "ix": 1
                }
            }]
        }, {
            "ty": 5,
            "nm": "Text 01 Position Y",
            "np": 3,
            "mn": "ADBE Slider Control",
            "ix": 10,
            "en": 1,
            "ef": [{
                "ty": 0,
                "nm": "Cursore",
                "mn": "ADBE Slider Control-0001",
                "ix": 1,
                "v": {
                    "a": 0,
                    "k": 126.134,
                    "ix": 1
                }
            }]
        }, {
            "ty": 5,
            "nm": "Text 02 Size",
            "np": 3,
            "mn": "ADBE Slider Control",
            "ix": 11,
            "en": 1,
            "ef": [{
                "ty": 0,
                "nm": "Cursore",
                "mn": "ADBE Slider Control-0001",
                "ix": 1,
                "v": {
                    "a": 0,
                    "k": 100,
                    "ix": 1
                }
            }]
        }, {
            "ty": 5,
            "nm": "Text 02 Position X",
            "np": 3,
            "mn": "ADBE Slider Control",
            "ix": 12,
            "en": 1,
            "ef": [{
                "ty": 0,
                "nm": "Cursore",
                "mn": "ADBE Slider Control-0001",
                "ix": 1,
                "v": {
                    "a": 0,
                    "k": 510.036,
                    "ix": 1
                }
            }]
        }, {
            "ty": 5,
            "nm": "Text 02 Position Y",
            "np": 3,
            "mn": "ADBE Slider Control",
            "ix": 13,
            "en": 1,
            "ef": [{
                "ty": 0,
                "nm": "Cursore",
                "mn": "ADBE Slider Control-0001",
                "ix": 1,
                "v": {
                    "a": 0,
                    "k": -90.293,
                    "ix": 1
                }
            }]
        }, {
            "ty": 5,
            "nm": "------------- SCREEN CONTROL",
            "np": 3,
            "mn": "ADBE Checkbox Control",
            "ix": 14,
            "en": 1,
            "ef": [{
                "ty": 7,
                "nm": "Casella",
                "mn": "ADBE Checkbox Control-0001",
                "ix": 1,
                "v": {
                    "a": 0,
                    "k": 0,
                    "ix": 1
                }
            }]
        }, {
            "ty": 5,
            "nm": "Global Size",
            "np": 3,
            "mn": "ADBE Slider Control",
            "ix": 15,
            "en": 1,
            "ef": [{
                "ty": 0,
                "nm": "Cursore",
                "mn": "ADBE Slider Control-0001",
                "ix": 1,
                "v": {
                    "a": 0,
                    "k": 100,
                    "ix": 1
                }
            }]
        }, {
            "ty": 5,
            "nm": "X Position",
            "np": 3,
            "mn": "ADBE Slider Control",
            "ix": 16,
            "en": 1,
            "ef": [{
                "ty": 0,
                "nm": "Cursore",
                "mn": "ADBE Slider Control-0001",
                "ix": 1,
                "v": {
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
                        "t": 587,
                        "s": [1270]
                    }, {
                        "t": 599,
                        "s": [-550]
                    }],
                    "ix": 1
                }
            }]
        }, {
            "ty": 5,
            "nm": "Y Position",
            "np": 3,
            "mn": "ADBE Slider Control",
            "ix": 17,
            "en": 1,
            "ef": [{
                "ty": 0,
                "nm": "Cursore",
                "mn": "ADBE Slider Control-0001",
                "ix": 1,
                "v": {
                    "a": 0,
                    "k": 1850,
                    "ix": 1
                }
            }]
        }, {
            "ty": 5,
            "nm": "---------------- SHAPES",
            "np": 3,
            "mn": "ADBE Checkbox Control",
            "ix": 18,
            "en": 1,
            "ef": [{
                "ty": 7,
                "nm": "Casella",
                "mn": "ADBE Checkbox Control-0001",
                "ix": 1,
                "v": {
                    "a": 0,
                    "k": 0,
                    "ix": 1
                }
            }]
        }, {
            "ty": 5,
            "nm": "Shape Width",
            "np": 3,
            "mn": "ADBE Slider Control",
            "ix": 19,
            "en": 1,
            "ef": [{
                "ty": 0,
                "nm": "Cursore",
                "mn": "ADBE Slider Control-0001",
                "ix": 1,
                "v": {
                    "a": 0,
                    "k": 120,
                    "ix": 1
                }
            }]
        }, {
            "ty": 5,
            "nm": "Shape Size",
            "np": 3,
            "mn": "ADBE Slider Control",
            "ix": 20,
            "en": 1,
            "ef": [{
                "ty": 0,
                "nm": "Cursore",
                "mn": "ADBE Slider Control-0001",
                "ix": 1,
                "v": {
                    "a": 0,
                    "k": 92,
                    "ix": 1
                }
            }]
        }, {
            "ty": 5,
            "nm": "Shape Position X",
            "np": 3,
            "mn": "ADBE Slider Control",
            "ix": 21,
            "en": 1,
            "ef": [{
                "ty": 0,
                "nm": "Cursore",
                "mn": "ADBE Slider Control-0001",
                "ix": 1,
                "v": {
                    "a": 0,
                    "k": 382,
                    "ix": 1
                }
            }]
        }, {
            "ty": 5,
            "nm": "Shape Position Y",
            "np": 3,
            "mn": "ADBE Slider Control",
            "ix": 22,
            "en": 1,
            "ef": [{
                "ty": 0,
                "nm": "Cursore",
                "mn": "ADBE Slider Control-0001",
                "ix": 1,
                "v": {
                    "a": 0,
                    "k": -116,
                    "ix": 1
                }
            }]
        }, {
            "ty": 5,
            "nm": "Runing Shape Width",
            "np": 3,
            "mn": "ADBE Slider Control",
            "ix": 23,
            "en": 1,
            "ef": [{
                "ty": 0,
                "nm": "Cursore",
                "mn": "ADBE Slider Control-0001",
                "ix": 1,
                "v": {
                    "a": 0,
                    "k": 300,
                    "ix": 1
                }
            }]
        }],
        "ip": 0,
        "op": 600.600600600601,
        "st": 0,
        "bm": 0
    }, {
        "ddd": 0,
        "ind": 2,
        "ty": 3,
        "nm": "Global",
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
                "s": true,
                "x": {
                    "k": [{
                        "s": [1270],
                        "t": 587,
                        "i": {
                            "x": [1],
                            "y": [1]
                        },
                        "o": {
                            "x": [0],
                            "y": [0]
                        }
                    }, {
                        "s": [-550],
                        "t": 599,
                        "i": {
                            "x": [1],
                            "y": [1]
                        },
                        "o": {
                            "x": [0],
                            "y": [0]
                        }
                    }]
                },
                "y": {
                    "k": [{
                        "s": [1850],
                        "t": 0,
                        "i": {
                            "x": [1],
                            "y": [1]
                        },
                        "o": {
                            "x": [0],
                            "y": [0]
                        }
                    }, {
                        "s": [1850],
                        "t": 599,
                        "i": {
                            "x": [1],
                            "y": [1]
                        },
                        "o": {
                            "x": [0],
                            "y": [0]
                        }
                    }]
                }
            },
            "a": {
                "a": 0,
                "k": [50, 50, 0],
                "ix": 1
            },
            "s": {
                "k": [{
                    "s": [100, 100, 100],
                    "t": 0,
                    "i": {
                        "x": [1, 1, 1],
                        "y": [1, 1, 1]
                    },
                    "o": {
                        "x": [0, 0, 0],
                        "y": [0, 0, 0]
                    }
                }, {
                    "s": [100, 100, 100],
                    "t": 599,
                    "i": {
                        "x": [1, 1, 1],
                        "y": [1, 1, 1]
                    },
                    "o": {
                        "x": [0, 0, 0],
                        "y": [0, 0, 0]
                    }
                }]
            }
        },
        "ao": 0,
        "ip": 0,
        "op": 600,
        "st": 0,
        "bm": 0
    }, {
        "ddd": 0,
        "ind": 3,
        "ty": 3,
        "nm": "Move",
        "parent": 2,
        "hd": true,
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
                        "x": 0.32,
                        "y": 1
                    },
                    "o": {
                        "x": 0.68,
                        "y": 0
                    },
                    "t": 0,
                    "s": [-242, 50, 0],
                    "to": [48.667, 0, 0],
                    "ti": [-48.667, 0, 0]
                }, {
                    "t": 67,
                    "s": [50, 50, 0]
                }],
                "ix": 2
            },
            "a": {
                "a": 0,
                "k": [50, 50, 0],
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
        "op": 600,
        "st": 0,
        "bm": 0
    }, {
        "ddd": 0,
        "ind": 4,
        "ty": 4,
        "nm": "Runing 1",
        "parent": 3,
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
                "k": [64, 111, 0],
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
            "ty": 29,
            "nm": "Controllo sfocatura",
            "np": 5,
            "mn": "ADBE Gaussian Blur 2",
            "ix": 1,
            "en": 1,
            "ef": [{
                "ty": 0,
                "nm": "Sfocatura",
                "mn": "ADBE Gaussian Blur 2-0001",
                "ix": 1,
                "v": {
                    "a": 0,
                    "k": 134.2,
                    "ix": 1
                }
            }, {
                "ty": 7,
                "nm": "Dimensioni sfocatura",
                "mn": "ADBE Gaussian Blur 2-0002",
                "ix": 2,
                "v": {
                    "a": 0,
                    "k": 1,
                    "ix": 2
                }
            }, {
                "ty": 7,
                "nm": "Ripeti pixel del bordo",
                "mn": "ADBE Gaussian Blur 2-0003",
                "ix": 3,
                "v": {
                    "a": 0,
                    "k": 0,
                    "ix": 3
                }
            }]
        }, {
            "ty": 21,
            "nm": "Riempimento",
            "np": 9,
            "mn": "ADBE Fill",
            "ix": 2,
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
                    "k": [{
                        "s": [0.4, 0.067, 0.949, 1],
                        "t": 0,
                        "i": {
                            "x": [1],
                            "y": [1]
                        },
                        "o": {
                            "x": [0],
                            "y": [0]
                        }
                    }, {
                        "s": [0.4, 0.067, 0.949, 1],
                        "t": 599,
                        "i": {
                            "x": [1],
                            "y": [1]
                        },
                        "o": {
                            "x": [0],
                            "y": [0]
                        }
                    }]
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
                            [0, 0],
                            [0, 0]
                        ],
                        "o": [
                            [0, 0],
                            [0, 0]
                        ],
                        "v": [
                            [-1724, -24],
                            [476, -24]
                        ],
                        "c": false
                    },
                    "ix": 2
                },
                "nm": "Path 1",
                "mn": "ADBE Vector Shape - Group",
                "hd": false
            }, {
                "ty": "st",
                "c": {
                    "a": 0,
                    "k": [1, 0, 0.988969989851, 1],
                    "ix": 3
                },
                "o": {
                    "a": 0,
                    "k": 100,
                    "ix": 4
                },
                "w": {
                    "k": [{
                        "s": [300],
                        "t": 0,
                        "i": {
                            "x": [1],
                            "y": [1]
                        },
                        "o": {
                            "x": [0],
                            "y": [0]
                        }
                    }, {
                        "s": [300],
                        "t": 599,
                        "i": {
                            "x": [1],
                            "y": [1]
                        },
                        "o": {
                            "x": [0],
                            "y": [0]
                        }
                    }]
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
                    "k": [1, 0, 0, 1],
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
                "hd": true
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
            "nm": "Shape 1",
            "np": 3,
            "cix": 2,
            "bm": 0,
            "ix": 1,
            "mn": "ADBE Vector Group",
            "hd": false
        }, {
            "ty": "tm",
            "s": {
                "a": 1,
                "k": [{
                    "i": {
                        "x": [0],
                        "y": [1]
                    },
                    "o": {
                        "x": [0.8],
                        "y": [0]
                    },
                    "t": 5,
                    "s": [0]
                }, {
                    "t": 35,
                    "s": [100]
                }],
                "ix": 1
            },
            "e": {
                "a": 1,
                "k": [{
                    "i": {
                        "x": [0],
                        "y": [1]
                    },
                    "o": {
                        "x": [0.8],
                        "y": [0]
                    },
                    "t": 0,
                    "s": [0]
                }, {
                    "t": 30,
                    "s": [100]
                }],
                "ix": 2
            },
            "o": {
                "a": 0,
                "k": 0,
                "ix": 3
            },
            "m": 1,
            "ix": 2,
            "nm": "Trim Paths 1",
            "mn": "ADBE Vector Filter - Trim",
            "hd": false
        }],
        "ip": 0,
        "op": 600,
        "st": 0,
        "bm": 0
    }, {
        "ddd": 0,
        "ind": 5,
        "ty": 4,
        "nm": "Runing 2",
        "parent": 3,
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
                "k": [64, 111, 0],
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
            "ty": 29,
            "nm": "Controllo sfocatura",
            "np": 5,
            "mn": "ADBE Gaussian Blur 2",
            "ix": 1,
            "en": 1,
            "ef": [{
                "ty": 0,
                "nm": "Sfocatura",
                "mn": "ADBE Gaussian Blur 2-0001",
                "ix": 1,
                "v": {
                    "a": 0,
                    "k": 100,
                    "ix": 1
                }
            }, {
                "ty": 7,
                "nm": "Dimensioni sfocatura",
                "mn": "ADBE Gaussian Blur 2-0002",
                "ix": 2,
                "v": {
                    "a": 0,
                    "k": 1,
                    "ix": 2
                }
            }, {
                "ty": 7,
                "nm": "Ripeti pixel del bordo",
                "mn": "ADBE Gaussian Blur 2-0003",
                "ix": 3,
                "v": {
                    "a": 0,
                    "k": 0,
                    "ix": 3
                }
            }]
        }, {
            "ty": 21,
            "nm": "Riempimento",
            "np": 9,
            "mn": "ADBE Fill",
            "ix": 2,
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
                    "k": [{
                        "s": [0.239, 0.749, 1, 1],
                        "t": 0,
                        "i": {
                            "x": [1],
                            "y": [1]
                        },
                        "o": {
                            "x": [0],
                            "y": [0]
                        }
                    }, {
                        "s": [0.239, 0.749, 1, 1],
                        "t": 599,
                        "i": {
                            "x": [1],
                            "y": [1]
                        },
                        "o": {
                            "x": [0],
                            "y": [0]
                        }
                    }]
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
                            [0, 0],
                            [0, 0]
                        ],
                        "o": [
                            [0, 0],
                            [0, 0]
                        ],
                        "v": [
                            [-1724, -24],
                            [476, -24]
                        ],
                        "c": false
                    },
                    "ix": 2
                },
                "nm": "Path 1",
                "mn": "ADBE Vector Shape - Group",
                "hd": false
            }, {
                "ty": "st",
                "c": {
                    "a": 0,
                    "k": [1, 1, 1, 1],
                    "ix": 3
                },
                "o": {
                    "a": 0,
                    "k": 100,
                    "ix": 4
                },
                "w": {
                    "k": [{
                        "s": [300],
                        "t": 0,
                        "i": {
                            "x": [1],
                            "y": [1]
                        },
                        "o": {
                            "x": [0],
                            "y": [0]
                        }
                    }, {
                        "s": [300],
                        "t": 599,
                        "i": {
                            "x": [1],
                            "y": [1]
                        },
                        "o": {
                            "x": [0],
                            "y": [0]
                        }
                    }]
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
                    "k": [1, 0, 0, 1],
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
                "hd": true
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
            "nm": "Shape 1",
            "np": 3,
            "cix": 2,
            "bm": 0,
            "ix": 1,
            "mn": "ADBE Vector Group",
            "hd": false
        }, {
            "ty": "tm",
            "s": {
                "a": 1,
                "k": [{
                    "i": {
                        "x": [0],
                        "y": [1]
                    },
                    "o": {
                        "x": [0.8],
                        "y": [0]
                    },
                    "t": 7,
                    "s": [0]
                }, {
                    "t": 37,
                    "s": [100]
                }],
                "ix": 1
            },
            "e": {
                "a": 1,
                "k": [{
                    "i": {
                        "x": [0],
                        "y": [1]
                    },
                    "o": {
                        "x": [0.8],
                        "y": [0]
                    },
                    "t": 2,
                    "s": [0]
                }, {
                    "t": 32,
                    "s": [100]
                }],
                "ix": 2
            },
            "o": {
                "a": 0,
                "k": 0,
                "ix": 3
            },
            "m": 1,
            "ix": 2,
            "nm": "Trim Paths 1",
            "mn": "ADBE Vector Filter - Trim",
            "hd": false
        }],
        "ip": 0,
        "op": 600,
        "st": 0,
        "bm": 0
    }, {
        "ddd": 0,
        "ind": 6,
        "ty": 5,
        "nm": "ANTONIO CURCI",
        "parent": 3,
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
                "s": true,
                "x": {
                    "k": [{
                        "s": [547.158],
                        "t": 0,
                        "i": {
                            "x": [1],
                            "y": [1]
                        },
                        "o": {
                            "x": [0],
                            "y": [0]
                        }
                    }, {
                        "s": [547.158],
                        "t": 599,
                        "i": {
                            "x": [1],
                            "y": [1]
                        },
                        "o": {
                            "x": [0],
                            "y": [0]
                        }
                    }]
                },
                "y": {
                    "k": [{
                        "s": [126.134],
                        "t": 0,
                        "i": {
                            "x": [1],
                            "y": [1]
                        },
                        "o": {
                            "x": [0],
                            "y": [0]
                        }
                    }, {
                        "s": [126.134],
                        "t": 599,
                        "i": {
                            "x": [1],
                            "y": [1]
                        },
                        "o": {
                            "x": [0],
                            "y": [0]
                        }
                    }]
                }
            },
            "a": {
                "a": 0,
                "k": [0, 0, 0],
                "ix": 1
            },
            "s": {
                "k": [{
                    "s": [100, 100, 100],
                    "t": 0,
                    "i": {
                        "x": [1, 1, 1],
                        "y": [1, 1, 1]
                    },
                    "o": {
                        "x": [0, 0, 0],
                        "y": [0, 0, 0]
                    }
                }, {
                    "s": [100, 100, 100],
                    "t": 599,
                    "i": {
                        "x": [1, 1, 1],
                        "y": [1, 1, 1]
                    },
                    "o": {
                        "x": [0, 0, 0],
                        "y": [0, 0, 0]
                    }
                }]
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
                    "k": [{
                        "s": [0.965, 0.965, 0.965, 1],
                        "t": 0,
                        "i": {
                            "x": [1],
                            "y": [1]
                        },
                        "o": {
                            "x": [0],
                            "y": [0]
                        }
                    }, {
                        "s": [0.965, 0.965, 0.965, 1],
                        "t": 599,
                        "i": {
                            "x": [1],
                            "y": [1]
                        },
                        "o": {
                            "x": [0],
                            "y": [0]
                        }
                    }]
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
                        "s": 200,
                        "f": "PTSans-Bold",
                        "t": nome,
                        "j": 1,
                        "tr": 0,
                        "lh": 240,
                        "ls": 0,
                        "fc": [lottiecolors[1][0], lottiecolors[1][1], lottiecolors[1][2]],
                        "sc": [0, 0, 0],
                        "sw": 0.00999999977648,
                        "of": true
                    },
                    "t": 0
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
                "nm": "Animator 1",
                "s": {
                    "t": 0,
                    "xe": {
                        "a": 0,
                        "k": 0,
                        "ix": 7
                    },
                    "ne": {
                        "a": 0,
                        "k": 0,
                        "ix": 8
                    },
                    "a": {
                        "a": 0,
                        "k": 100,
                        "ix": 4
                    },
                    "b": 1,
                    "rn": 0,
                    "sh": 1,
                    "s": {
                        "a": 1,
                        "k": [{
                            "i": {
                                "x": [0],
                                "y": [1]
                            },
                            "o": {
                                "x": [0.593],
                                "y": [0]
                            },
                            "t": 9,
                            "s": [0]
                        }, {
                            "t": 49,
                            "s": [100]
                        }],
                        "ix": 1
                    },
                    "r": 1
                },
                "a": {
                    "o": {
                        "a": 0,
                        "k": 0,
                        "ix": 9
                    },
                    "t": {
                        "a": 0,
                        "k": 100,
                        "ix": 89
                    }
                }
            }]
        },
        "ip": 0,
        "op": 600,
        "st": 0,
        "bm": 0
    }, {
        "ddd": 0,
        "ind": 7,
        "ty": 5,
        "nm": "PROF. INFORMATICA",
        "parent": 3,
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
                "s": true,
                "x": {
                    "k": [{
                        "s": [510.036],
                        "t": 0,
                        "i": {
                            "x": [1],
                            "y": [1]
                        },
                        "o": {
                            "x": [0],
                            "y": [0]
                        }
                    }, {
                        "s": [510.036],
                        "t": 599,
                        "i": {
                            "x": [1],
                            "y": [1]
                        },
                        "o": {
                            "x": [0],
                            "y": [0]
                        }
                    }]
                },
                "y": {
                    "k": [{
                        "s": [-90.293],
                        "t": 0,
                        "i": {
                            "x": [1],
                            "y": [1]
                        },
                        "o": {
                            "x": [0],
                            "y": [0]
                        }
                    }, {
                        "s": [-90.293],
                        "t": 599,
                        "i": {
                            "x": [1],
                            "y": [1]
                        },
                        "o": {
                            "x": [0],
                            "y": [0]
                        }
                    }]
                }
            },
            "a": {
                "a": 0,
                "k": [0, 0, 0],
                "ix": 1
            },
            "s": {
                "k": [{
                    "s": [100, 100, 100],
                    "t": 0,
                    "i": {
                        "x": [1, 1, 1],
                        "y": [1, 1, 1]
                    },
                    "o": {
                        "x": [0, 0, 0],
                        "y": [0, 0, 0]
                    }
                }, {
                    "s": [100, 100, 100],
                    "t": 599,
                    "i": {
                        "x": [1, 1, 1],
                        "y": [1, 1, 1]
                    },
                    "o": {
                        "x": [0, 0, 0],
                        "y": [0, 0, 0]
                    }
                }]
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
                    "k": [{
                        "s": [1, 1, 1, 1],
                        "t": 0,
                        "i": {
                            "x": [1],
                            "y": [1]
                        },
                        "o": {
                            "x": [0],
                            "y": [0]
                        }
                    }, {
                        "s": [1, 1, 1, 1],
                        "t": 599,
                        "i": {
                            "x": [1],
                            "y": [1]
                        },
                        "o": {
                            "x": [0],
                            "y": [0]
                        }
                    }]
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
                        "s": 70,
                        "f": "PTSans-Regular",
                        "t": funzione,
                        "j": 1,
                        "tr": 0,
                        "lh": 84,
                        "ls": 0,
                        "fc": [lottiecolors[2][0], lottiecolors[2][1], lottiecolors[2][2]],
                    },
                    "t": 0
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
                "nm": "Animator 1",
                "s": {
                    "t": 0,
                    "xe": {
                        "a": 0,
                        "k": 0,
                        "ix": 7
                    },
                    "ne": {
                        "a": 0,
                        "k": 0,
                        "ix": 8
                    },
                    "a": {
                        "a": 0,
                        "k": 100,
                        "ix": 4
                    },
                    "b": 1,
                    "rn": 0,
                    "sh": 1,
                    "s": {
                        "a": 1,
                        "k": [{
                            "i": {
                                "x": [0.064],
                                "y": [1]
                            },
                            "o": {
                                "x": [0.351],
                                "y": [0]
                            },
                            "t": 38,
                            "s": [0]
                        }, {
                            "t": 68,
                            "s": [100]
                        }],
                        "ix": 1
                    },
                    "r": 1
                },
                "a": {
                    "o": {
                        "a": 0,
                        "k": 0,
                        "ix": 9
                    },
                    "t": {
                        "a": 0,
                        "k": -29,
                        "ix": 89
                    }
                }
            }, {
                "nm": "Animator 2",
                "s": {
                    "t": 0,
                    "xe": {
                        "a": 0,
                        "k": 0,
                        "ix": 7
                    },
                    "ne": {
                        "a": 0,
                        "k": 0,
                        "ix": 8
                    },
                    "a": {
                        "a": 0,
                        "k": 100,
                        "ix": 4
                    },
                    "b": 4,
                    "rn": 0,
                    "sh": 1,
                    "s": {
                        "a": 1,
                        "k": [{
                            "i": {
                                "x": [0.082],
                                "y": [1]
                            },
                            "o": {
                                "x": [0.574],
                                "y": [0]
                            },
                            "t": 38,
                            "s": [0]
                        }, {
                            "t": 68,
                            "s": [100]
                        }],
                        "ix": 1
                    },
                    "r": 1
                },
                "a": {
                    "p": {
                        "a": 0,
                        "k": [196, 0, 0],
                        "ix": 2
                    }
                }
            }]
        },
        "ip": 0,
        "op": 600,
        "st": 0,
        "bm": 0
    }, {
        "ddd": 0,
        "ind": 8,
        "ty": 4,
        "nm": "Shape 1",
        "parent": 3,
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
                "s": true,
                "x": {
                    "k": [{
                        "s": [382],
                        "t": 0,
                        "i": {
                            "x": [1],
                            "y": [1]
                        },
                        "o": {
                            "x": [0],
                            "y": [0]
                        }
                    }, {
                        "s": [382],
                        "t": 599,
                        "i": {
                            "x": [1],
                            "y": [1]
                        },
                        "o": {
                            "x": [0],
                            "y": [0]
                        }
                    }]
                },
                "y": {
                    "k": [{
                        "s": [-116],
                        "t": 0,
                        "i": {
                            "x": [1],
                            "y": [1]
                        },
                        "o": {
                            "x": [0],
                            "y": [0]
                        }
                    }, {
                        "s": [-116],
                        "t": 599,
                        "i": {
                            "x": [1],
                            "y": [1]
                        },
                        "o": {
                            "x": [0],
                            "y": [0]
                        }
                    }]
                }
            },
            "a": {
                "a": 0,
                "k": [492, -176, 0],
                "ix": 1
            },
            "s": {
                "k": [{
                    "s": [92, 100, 100],
                    "t": 0,
                    "i": {
                        "x": [1, 1, 1],
                        "y": [1, 1, 1]
                    },
                    "o": {
                        "x": [0, 0, 0],
                        "y": [0, 0, 0]
                    }
                }, {
                    "s": [92, 100, 100],
                    "t": 599,
                    "i": {
                        "x": [1, 1, 1],
                        "y": [1, 1, 1]
                    },
                    "o": {
                        "x": [0, 0, 0],
                        "y": [0, 0, 0]
                    }
                }]
            }
        },
        "ao": 0,
        "ef": [{
            "ty": 29,
            "nm": "Controllo sfocatura",
            "np": 5,
            "mn": "ADBE Gaussian Blur 2",
            "ix": 1,
            "en": 1,
            "ef": [{
                "ty": 0,
                "nm": "Sfocatura",
                "mn": "ADBE Gaussian Blur 2-0001",
                "ix": 1,
                "v": {
                    "a": 1,
                    "k": [{
                        "i": {
                            "x": [0],
                            "y": [1]
                        },
                        "o": {
                            "x": [0.8],
                            "y": [0]
                        },
                        "t": 27,
                        "s": [56.7]
                    }, {
                        "t": 60,
                        "s": [0]
                    }],
                    "ix": 1
                }
            }, {
                "ty": 7,
                "nm": "Dimensioni sfocatura",
                "mn": "ADBE Gaussian Blur 2-0002",
                "ix": 2,
                "v": {
                    "a": 0,
                    "k": 1,
                    "ix": 2
                }
            }, {
                "ty": 7,
                "nm": "Ripeti pixel del bordo",
                "mn": "ADBE Gaussian Blur 2-0003",
                "ix": 3,
                "v": {
                    "a": 0,
                    "k": 0,
                    "ix": 3
                }
            }]
        }, {
            "ty": 21,
            "nm": "Riempimento",
            "np": 9,
            "mn": "ADBE Fill",
            "ix": 2,
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
                    "k": [{
                        "s": [0.4, 0.067, 0.949, 1],
                        "t": 0,
                        "i": {
                            "x": [1],
                            "y": [1]
                        },
                        "o": {
                            "x": [0],
                            "y": [0]
                        }
                    }, {
                        "s": [0.4, 0.067, 0.949, 1],
                        "t": 599,
                        "i": {
                            "x": [1],
                            "y": [1]
                        },
                        "o": {
                            "x": [0],
                            "y": [0]
                        }
                    }]
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
                            [0, 0],
                            [0, 0]
                        ],
                        "o": [
                            [0, 0],
                            [0, 0]
                        ],
                        "v": [
                            [492, -176],
                            [-312, -176]
                        ],
                        "c": false
                    },
                    "ix": 2
                },
                "nm": "Path 1",
                "mn": "ADBE Vector Shape - Group",
                "hd": false
            }, {
                "ty": "st",
                "c": {
                    "a": 0,
                    "k": [1, 0, 0, 1],
                    "ix": 3
                },
                "o": {
                    "a": 0,
                    "k": 100,
                    "ix": 4
                },
                "w": {
                    "k": [{
                        "s": [120],
                        "t": 0,
                        "i": {
                            "x": [1],
                            "y": [1]
                        },
                        "o": {
                            "x": [0],
                            "y": [0]
                        }
                    }, {
                        "s": [120],
                        "t": 599,
                        "i": {
                            "x": [1],
                            "y": [1]
                        },
                        "o": {
                            "x": [0],
                            "y": [0]
                        }
                    }]
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
                    "k": [1, 0, 0, 1],
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
                "hd": true
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
                    "k": [133, 100],
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
            "nm": "Shape 1",
            "np": 3,
            "cix": 2,
            "bm": 0,
            "ix": 1,
            "mn": "ADBE Vector Group",
            "hd": false
        }, {
            "ty": "tm",
            "s": {
                "a": 0,
                "k": 0,
                "ix": 1
            },
            "e": {
                "a": 1,
                "k": [{
                    "i": {
                        "x": [0],
                        "y": [1]
                    },
                    "o": {
                        "x": [0.8],
                        "y": [0]
                    },
                    "t": 27,
                    "s": [0]
                }, {
                    "t": 60,
                    "s": [100]
                }],
                "ix": 2
            },
            "o": {
                "a": 0,
                "k": 0,
                "ix": 3
            },
            "m": 1,
            "ix": 2,
            "nm": "Trim Paths 1",
            "mn": "ADBE Vector Filter - Trim",
            "hd": false
        }],
        "ip": 0,
        "op": 600,
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
