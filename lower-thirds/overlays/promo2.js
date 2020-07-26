var bc = new BroadcastChannel('obs-lower-thirds-channel');
bc.onmessage = function (ev) {
  received_data=ev.data.split("|");
  var animazione = received_data[0];
  var nome = received_data[1];
  var funzione = received_data[2];
  var position = received_data[3];
if (animazione == "promo1"){
  var lottiecolors = [
      [(colori.sfondo1[0]/255), (colori.sfondo1[1]/255), (colori.sfondo1[2]/255)], //Nome sfondo
      [(colori.color1[0]/255), (colori.color1[1]/255), (colori.color1[2]/255)], //Giallo
      [(colori.color2[0]/255), (colori.color2[1]/255), (colori.color2[2]/255)], //Azzurro
      [(colori.sfondo2[0]/255), (colori.sfondo2[1]/255), (colori.sfondo2[2]/255)], //Ruolo sfondo
      [(colori.text1[0]/255), (colori.text1[1]/255), (colori.text1[2]/255)], //Nome
      [(colori.text2[0]/255), (colori.text2[1]/255), (colori.text2[2]/255)], //Ruolo
  ];
  console.log ('Name: ' + received_data[1] + ', Function: ' + received_data[2] + ', Position: ' + received_data[3]);
  console.log("Lottie Colors");
  console.log (JSON.stringify(lottiecolors, null, 4));

if (position == 'left') {document.getElementById("lottie").classList.remove("right");};
if (position == 'right') {document.getElementById("lottie").classList.add("right");};

var animationData = {
    "v": "5.6.10",
    "fr": 29.9700012207031,
    "ip": 0,
    "op": 210.000008553475,
    "w": 1920,
    "h": 1080,
    "nm": "Lower Thirds 23",
    "ddd": 0,
    "assets": [{
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
                        "k": [0.890196144581, 0.023529414088, 0.074509806931, 1],
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
                        "k": [1, 1, 1, 1],
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
                        "k": [0, 0.623529434204, 0.890196144581, 1],
                        "ix": 1
                    }
                }]
            }],
            "ip": 0,
            "op": 107892.004394531,
            "st": 0,
            "bm": 0
        }, {
            "ddd": 0,
            "ind": 2,
            "ty": 5,
            "nm": "TEXT 01",
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
                    "k": [236, 226, 0],
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
                        "k": [0, 0.674509823322, 0.752941191196, 1],
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
            "t": {
                "d": {
                    "k": [{
                        "s": {
                            "s": 47,
                            "f": "Montserrat-Bold",
                            "t": "LEGGI LE\u0003NEWS SU",
                            "j": 0,
                            "tr": -11,
                            "lh": 56.4000015258789,
                            "ls": 0,
                            "fc": [0, 0.675, 0.753]
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
                            "k": 100,
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
                        "sh": 2,
                        "o": {
                            "a": 1,
                            "k": [{
                                "i": {
                                    "x": [0],
                                    "y": [1]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 6,
                                "s": [-100]
                            }, {
                                "i": {
                                    "x": [0],
                                    "y": [1]
                                },
                                "o": {
                                    "x": [0.333],
                                    "y": [0]
                                },
                                "t": 55,
                                "s": [100]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0]
                                },
                                "t": 156,
                                "s": [100]
                            }, {
                                "t": 195.000007942513,
                                "s": [-100]
                            }],
                            "ix": 3
                        },
                        "r": 1
                    },
                    "a": {
                        "o": {
                            "a": 0,
                            "k": 0,
                            "ix": 9
                        }
                    }
                }]
            },
            "ip": 10.0000004073083,
            "op": 195.000007942513,
            "st": 6.00000024438501,
            "bm": 0
        }, {
            "ddd": 0,
            "ind": 3,
            "ty": 5,
            "nm": "shadow 1",
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
                    "k": [238.5, 229.5, 0],
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
                        "k": [0, 0, 0, 1],
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
            "t": {
                "d": {
                    "k": [{
                        "s": {
                            "s": 47,
                            "f": "Montserrat-Bold",
                            "t": "LEGGI LE\u0003NEWS SU",
                            "j": 0,
                            "tr": -11,
                            "lh": 56.4000015258789,
                            "ls": 0,
                            "fc": [0, 0.675, 0.753]
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
                            "k": 100,
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
                        "sh": 2,
                        "o": {
                            "a": 1,
                            "k": [{
                                "i": {
                                    "x": [0],
                                    "y": [1]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 0,
                                "s": [-100]
                            }, {
                                "i": {
                                    "x": [0],
                                    "y": [1]
                                },
                                "o": {
                                    "x": [0.333],
                                    "y": [0]
                                },
                                "t": 49,
                                "s": [100]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0]
                                },
                                "t": 150,
                                "s": [100]
                            }, {
                                "t": 189.000007698128,
                                "s": [-100]
                            }],
                            "ix": 3
                        },
                        "r": 1
                    },
                    "a": {
                        "o": {
                            "a": 0,
                            "k": 0,
                            "ix": 9
                        }
                    }
                }]
            },
            "ip": 12.00000048877,
            "op": 189.000007698128,
            "st": 0,
            "bm": 0
        }, {
            "ddd": 0,
            "ind": 4,
            "ty": 5,
            "nm": "TEXT 02",
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
                    "k": [179, 398, 0],
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
                        "k": [0.941176474094, 0.941176474094, 0.941176474094, 1],
                        "ix": 3,
                        "x": "var $bm_rt;\n$bm_rt = thisComp.layer('Color Controller').effect('Color 02')('ADBE Color Control-0001');"
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
                            "s": 38,
                            "f": "Montserrat-Bold",
                            "t": "news.radiopanetti.it\u0003o app",
                            "j": 0,
                            "tr": -11,
                            "lh": 45.6000022888184,
                            "ls": 0,
                            "fc": [1, 1, 1]
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
                            "k": 100,
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
                        "sh": 2,
                        "o": {
                            "a": 1,
                            "k": [{
                                "i": {
                                    "x": [0],
                                    "y": [1]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 0,
                                "s": [-100]
                            }, {
                                "i": {
                                    "x": [0],
                                    "y": [1]
                                },
                                "o": {
                                    "x": [0.333],
                                    "y": [0]
                                },
                                "t": 49,
                                "s": [100]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0]
                                },
                                "t": 150,
                                "s": [100]
                            }, {
                                "t": 189.000007698128,
                                "s": [-100]
                            }],
                            "ix": 3
                        },
                        "r": 1
                    },
                    "a": {
                        "o": {
                            "a": 0,
                            "k": 0,
                            "ix": 9
                        }
                    }
                }, {
                    "nm": "Animatore 1",
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
                                "t": 83,
                                "s": [0]
                            }, {
                                "t": 101.000004113814,
                                "s": [100]
                            }],
                            "ix": 3
                        },
                        "r": 1
                    },
                    "a": {
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
                                "t": 83,
                                "s": [0, 0, 0],
                                "to": [0, 2.5, 0],
                                "ti": [0, -2.5, 0]
                            }, {
                                "t": 101.000004113814,
                                "s": [0, 15, 0]
                            }],
                            "ix": 2
                        }
                    }
                }]
            },
            "ip": 12.00000048877,
            "op": 189.000007698128,
            "st": 0,
            "bm": 0
        }, {
            "ddd": 0,
            "ind": 5,
            "ty": 5,
            "nm": "shadow 2",
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
                    "k": [181, 402, 0],
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
                        "k": [0, 0, 0, 1],
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
            "t": {
                "d": {
                    "k": [{
                        "s": {
                            "s": 38,
                            "f": "Montserrat-Bold",
                            "t": "news.radiopanetti.it\u0003o app",
                            "j": 0,
                            "tr": -11,
                            "lh": 45.6000022888184,
                            "ls": 0,
                            "fc": [1, 1, 1]
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
                            "k": 100,
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
                        "sh": 2,
                        "o": {
                            "a": 1,
                            "k": [{
                                "i": {
                                    "x": [0],
                                    "y": [1]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0.167]
                                },
                                "t": 0,
                                "s": [-100]
                            }, {
                                "i": {
                                    "x": [0],
                                    "y": [1]
                                },
                                "o": {
                                    "x": [0.333],
                                    "y": [0]
                                },
                                "t": 49,
                                "s": [100]
                            }, {
                                "i": {
                                    "x": [0.833],
                                    "y": [0.833]
                                },
                                "o": {
                                    "x": [0.167],
                                    "y": [0]
                                },
                                "t": 150,
                                "s": [100]
                            }, {
                                "t": 189.000007698128,
                                "s": [-100]
                            }],
                            "ix": 3
                        },
                        "r": 1
                    },
                    "a": {
                        "o": {
                            "a": 0,
                            "k": 0,
                            "ix": 9
                        }
                    }
                }, {
                    "nm": "Animatore 1",
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
                                "t": 83,
                                "s": [0]
                            }, {
                                "t": 101.000004113814,
                                "s": [100]
                            }],
                            "ix": 3
                        },
                        "r": 1
                    },
                    "a": {
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
                                "t": 83,
                                "s": [0, 0, 0],
                                "to": [0, 2.5, 0],
                                "ti": [0, -2.5, 0]
                            }, {
                                "t": 101.000004113814,
                                "s": [0, 15, 0]
                            }],
                            "ix": 2
                        }
                    }
                }]
            },
            "ip": 12.00000048877,
            "op": 189.000007698128,
            "st": 0,
            "bm": 0
        }, {
            "ddd": 0,
            "ind": 6,
            "ty": 4,
            "nm": "Frame",
            "sr": 1,
            "ks": {
                "o": {
                    "a": 0,
                    "k": 100,
                    "ix": 11
                },
                "r": {
                    "a": 1,
                    "k": [{
                        "i": {
                            "x": [0],
                            "y": [1]
                        },
                        "o": {
                            "x": [0.333],
                            "y": [0]
                        },
                        "t": 0,
                        "s": [-89]
                    }, {
                        "i": {
                            "x": [0],
                            "y": [1]
                        },
                        "o": {
                            "x": [0.333],
                            "y": [0]
                        },
                        "t": 61,
                        "s": [105]
                    }, {
                        "i": {
                            "x": [0.667],
                            "y": [1]
                        },
                        "o": {
                            "x": [0.333],
                            "y": [0]
                        },
                        "t": 149,
                        "s": [105]
                    }, {
                        "t": 210.000008553475,
                        "s": [-89]
                    }],
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
                        "s": [-291.056, 334.788, 0],
                        "to": [113.333, 0, 0],
                        "ti": [-113.333, 0, 0]
                    }, {
                        "i": {
                            "x": 0,
                            "y": 0
                        },
                        "o": {
                            "x": 0.333,
                            "y": 0.333
                        },
                        "t": 45,
                        "s": [388.944, 334.788, 0],
                        "to": [0, 0, 0],
                        "ti": [0, 0, 0]
                    }, {
                        "i": {
                            "x": 0.667,
                            "y": 1
                        },
                        "o": {
                            "x": 0.333,
                            "y": 0
                        },
                        "t": 165,
                        "s": [388.944, 334.788, 0],
                        "to": [-113.333, 0, 0],
                        "ti": [113.333, 0, 0]
                    }, {
                        "t": 210.000008553475,
                        "s": [-291.056, 334.788, 0]
                    }],
                    "ix": 2
                },
                "a": {
                    "a": 0,
                    "k": [-2, -24.744, 0],
                    "ix": 1
                },
                "s": {
                    "a": 0,
                    "k": [-229.815, 229.815, 100],
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
                        "x": "var $bm_rt;\n$bm_rt = thisComp.layer('Color Controller').effect('Color 03')('ADBE Color Control-0001');"
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
                    "ty": "sr",
                    "sy": 1,
                    "d": 1,
                    "pt": {
                        "a": 0,
                        "k": 3,
                        "ix": 3
                    },
                    "p": {
                        "a": 0,
                        "k": [0, 0],
                        "ix": 4
                    },
                    "r": {
                        "a": 0,
                        "k": 0,
                        "ix": 5
                    },
                    "ir": {
                        "a": 0,
                        "k": 90,
                        "ix": 6
                    },
                    "is": {
                        "a": 0,
                        "k": 0,
                        "ix": 8
                    },
                    "or": {
                        "a": 0,
                        "k": 131.589,
                        "ix": 7
                    },
                    "os": {
                        "a": 0,
                        "k": 50,
                        "ix": 9
                    },
                    "ix": 1,
                    "nm": "Polystar Path 1",
                    "mn": "ADBE Vector Shape - Star",
                    "hd": false
                }, {
                    "ty": "st",
                    "c": {
                        "a": 0,
                        "k": [0.972549019608, 0.749019966873, 0.207843002619, 1],
                        "ix": 3
                    },
                    "o": {
                        "a": 0,
                        "k": 100,
                        "ix": 4
                    },
                    "w": {
                        "a": 0,
                        "k": 8,
                        "ix": 5
                    },
                    "lc": 1,
                    "lj": 1,
                    "ml": 4,
                    "bm": 15,
                    "nm": "Stroke 1",
                    "mn": "ADBE Vector Graphic - Stroke",
                    "hd": true
                }, {
                    "ty": "fl",
                    "c": {
                        "a": 0,
                        "k": [0.552941176471, 0.082352941176, 0.305882352941, 1],
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
                        "k": [-2, -4],
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
                "nm": "Polystar 1",
                "np": 3,
                "cix": 2,
                "bm": 0,
                "ix": 1,
                "mn": "ADBE Vector Group",
                "hd": false
            }],
            "ip": 0,
            "op": 1486.00006052602,
            "st": -14.0000005702317,
            "bm": 0
        }]
    }],
    "fonts": {
        "list": [{
            "origin": 0,
            "fPath": "https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap",
            "fClass": "",
            "fFamily": "Montserrat",
            "fWeight": "600",
            "fStyle": "Bold",
            "fName": "Montserrat-Bold",
            "ascent": 74.2089135739952
        }]
    },
    "layers": [{
        "ddd": 0,
        "ind": 1,
        "ty": 0,
        "nm": "Lower Thirds 05",
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
                "k": [924, 988, 0],
                "ix": 2
            },
            "a": {
                "a": 0,
                "k": [960, 540, 0],
                "ix": 1
            },
            "s": {
                "a": 0,
                "k": [100, 100, 100],
                "ix": 6
            }
        },
        "ao": 0,
        "w": 1920,
        "h": 1080,
        "ip": 0,
        "op": 210.000008553475,
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
