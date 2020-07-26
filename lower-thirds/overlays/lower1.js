  var bc = new BroadcastChannel('obs-lower-thirds-channel');
  bc.onmessage = function (ev) {
    received_data=ev.data.split("|");
    var animazione = received_data[0];
    var nome = received_data[1];
    var funzione = received_data[2];
    var position = received_data[3];
if (animazione == "lower1"){
    var lottiecolors = [
        [(colori.lower1.sfondo1[0]/255), (colori.lower1.sfondo1[1]/255), (colori.lower1.sfondo1[2]/255)], //Nome sfondo
        [(colori.lower1.color1[0]/255), (colori.lower1.color1[1]/255), (colori.lower1.color1[2]/255)], //Giallo
        [(colori.lower1.color2[0]/255), (colori.lower1.color2[1]/255), (colori.lower1.color2[2]/255)], //Azzurro
        [(colori.lower1.sfondo2[0]/255), (colori.lower1.sfondo2[1]/255), (colori.lower1.sfondo2[2]/255)], //Ruolo sfondo
        [(colori.lower1.text1[0]/255), (colori.lower1.text1[1]/255), (colori.lower1.text1[2]/255)], //Nome
        [(colori.lower1.text2[0]/255), (colori.lower1.text2[1]/255), (colori.lower1.text2[2]/255)], //Ruolo
    ];
    console.log ('Name: ' + received_data[1] + ', Function: ' + received_data[2] + ', Position: ' + received_data[3]);
    console.log("Lottie Colors");
    console.log (JSON.stringify(lottiecolors, null, 4));

  if (position == 'left') {document.getElementById("lottie").classList.remove("right");};
  if (position == 'right') {document.getElementById("lottie").classList.add("right");};



var animationData = {
"v": "5.6.10",
"fr": 23.9759979248047,
"ip": 0,
"op": 167.999985459092,
"w": 1920,
"h": 1080,
"nm": "1_RS_ColorBoxes",
"ddd": 0,
"assets": [],
"fonts": {
    "list": [{
        "origin": 1,
        "fPath": "",
        "fClass": "",
        "fFamily": "Alte Haas Grotesk",
        "fWeight": "",
        "fStyle": "Regular",
        "fName": "AlteHaasGrotesk",
        "ascent": 74.1661743116565
    }, {
        "origin": 0,
        "fPath": "",
        "fClass": "",
        "fFamily": "Alte Haas Grotesk",
        "fWeight": "",
        "fStyle": "Bold",
        "fName": "AlteHaasGrotesk_Bold",
        "ascent": 74.1990356445313
    }]
},
"layers": [{
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
            "a": 0,
            "k": [183.969, 960.233, 0],
            "ix": 2
        },
        "a": {
            "a": 0,
            "k": [-776.031, 420.233, 0],
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
    "op": 167.999985459092,
    "st": 0,
    "bm": 0
}, {
    "ddd": 0,
    "ind": 2,
    "ty": 3,
    "nm": "Box Width",
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
            "a": 0,
            "k": [-772, 359, 0],
            "ix": 2
        },
        "a": {
            "a": 0,
            "k": [-772, 359, 0],
            "ix": 1
        },
        "s": {
            "a": 0,
            "k": [139, 100, 100],
            "ix": 6
        }
    },
    "ao": 0,
    "ef": [{
        "ty": 5,
        "nm": "width",
        "np": 3,
        "mn": "ADBE Slider Control",
        "ix": 1,
        "en": 1,
        "ef": [{
            "ty": 0,
            "nm": "Cursore",
            "mn": "ADBE Slider Control-0001",
            "ix": 1,
            "v": {
                "a": 0,
                "k": 109.5,
                "ix": 1
            }
        }]
    }, {
        "ty": 5,
        "nm": "height",
        "np": 3,
        "mn": "ADBE Slider Control",
        "ix": 2,
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
        "nm": "Controllo colore",
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
                "k": [0.13700979948, 0.13700979948, 0.13700979948, 1],
                "ix": 1
            }
        }]
    }, {
        "ty": 5,
        "nm": "Color Control 2",
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
                "k": [lottiecolors[1][0], lottiecolors[1][1], lottiecolors[1][2], 1], //Giallo
                "ix": 1
            }
        }]
    }, {
        "ty": 5,
        "nm": "Color Control 3",
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
                "k": [lottiecolors[2][0], lottiecolors[2][1], lottiecolors[2][2], 1], //Azzurro sopra
                "ix": 1
            }
        }]
    }, {
        "ty": 5,
        "nm": "Color Control 4",
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
                "k": [0.209548067579, 0.344055086024, 0.401164215686, 1],
                "ix": 1
            }
        }]
    }, {
        "ty": 5,
        "nm": "Controllo caselle",
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
                "k": 1,
                "ix": 1
            }
        }]
    }],
    "ip": 0,
    "op": 167.999985459092,
    "st": 0,
    "bm": 0
}, {
    "ddd": 0,
    "ind": 3,
    "ty": 4,
    "nm": "Shape Layer 7",
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
            "a": 1,
            "k": [{
                "i": {
                    "x": 0,
                    "y": 1
                },
                "o": {
                    "x": 0.167,
                    "y": 0.167
                },
                "t": 156,
                "s": [-775, 369.516, 0],
                "to": [91.333, -0.042, 0],
                "ti": [-91.333, 0.042, 0]
            }, {
                "t": 166.999985545645,
                "s": [-227, 369.266, 0]
            }],
            "ix": 2
        },
        "a": {
            "a": 0,
            "k": [-775, 367.266, 0],
            "ix": 1
        },
        "s": {
            "a": 0,
            "k": [103.702, 133.802, 100],
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
                "k": [548.695, 94.531],
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
            "ty": "st",
            "c": {
                "a": 0,
                "k": [1, 0.905528229358, 0.687392769608, 1],
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
                "k": [lottiecolors[3][0], lottiecolors[3][1], lottiecolors[3][2], 1], //Azzurro sotto
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
                "k": [-500.652, 367.266],
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
    "op": 167.999985459092,
    "st": 0,
    "bm": 0
}, {
    "ddd": 0,
    "ind": 4,
    "ty": 4,
    "nm": "Shape Layer 6",
    "parent": 2,
    "tt": 1,
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
            "k": [-775, 367.266, 0],
            "ix": 2
        },
        "a": {
            "a": 0,
            "k": [-775, 367.266, 0],
            "ix": 1
        },
        "s": {
            "a": 1,
            "k": [{
                "i": {
                    "x": [0.833, 0.833, 0.833],
                    "y": [0.833, 1, 1]
                },
                "o": {
                    "x": [1, 0.333, 0.333],
                    "y": [0, 0, 0]
                },
                "t": 144,
                "s": [0, 106, 100]
            }, {
                "t": 155.999986497728,
                "s": [100, 106, 100]
            }],
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
                "k": [548.695, 94.531],
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
            "ty": "st",
            "c": {
                "a": 0,
                "k": [1, 0.905528229358, 0.687392769608, 1],
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
                "k": [lottiecolors[3][0], lottiecolors[3][1], lottiecolors[3][2], 1], //Azzurro sotto
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
                "k": [-500.652, 367.266],
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
    "op": 167.999985459092,
    "st": 0,
    "bm": 0
}, {
    "ddd": 0,
    "ind": 5,
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
            "k": [-765.292, 356.348, 0],
            "ix": 2
        },
        "a": {
            "a": 0,
            "k": [-765.292, 356.348, 0],
            "ix": 1
        },
        "s": {
            "a": 0,
            "k": [83, 101.7, 100],
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
                "k": [592.261, 69.738],
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
            "ty": "st",
            "c": {
                "a": 0,
                "k": [1, 0.905528229358, 0.687392769608, 1],
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
                "k": [lottiecolors[0][0], lottiecolors[0][1], lottiecolors[0][2], 1], //Nero sfondo
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
                "k": [-469.161, 356.348],
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
    "op": 156.999986411175,
    "st": 0,
    "bm": 0
}, {
    "ddd": 0,
    "ind": 6,
    "ty": 5,
    "nm": nome,
    "parent": 1,
    "tt": 1,
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
                    "x": 0.167,
                    "y": 0.167
                },
                "t": 11,
                "s": [-1431.276, 375.51, 0],
                "to": [116.5, 0, 0],
                "ti": [-116.5, 0, 0]
            }, {
                "t": 44.8179961208666,
                "s": [-732.276, 375.51, 0]
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
    "t": {
        "d": {
            "k": [{
                "s": {
                    "s": 55,
                    "f": "AlteHaasGrotesk_Bold",
                    "t": nome,
                    "j": 0,
                    "tr": -32,
                    "lh": 66,
                    "ls": 1,
                    "fc": [lottiecolors[4][0], lottiecolors[4][1], lottiecolors[4][2]], //Colore nome
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
                        "t": 12.127,
                        "s": [0]
                    }, {
                        "t": 72.9999936816292,
                        "s": [100]
                    }],
                    "ix": 3
                },
                "r": 1
            },
            "a": {
                "t": {
                    "a": 0,
                    "k": -6,
                    "ix": 89
                }
            }
        }]
    },
    "ip": 0,
    "op": 156.999986411175,
    "st": 0,
    "bm": 0
}, {
    "ddd": 0,
    "ind": 7,
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
            "k": [-765.292, 356.348, 0],
            "ix": 2
        },
        "a": {
            "a": 0,
            "k": [-765.292, 356.348, 0],
            "ix": 1
        },
        "s": {
            "a": 1,
            "k": [{
                "i": {
                    "x": [0, 0.667, 0.667],
                    "y": [1, 1, 1]
                },
                "o": {
                    "x": [0.167, 0.167, 0.167],
                    "y": [0.167, 0, 0]
                },
                "t": 11,
                "s": [0, 101.7, 100]
            }, {
                "t": 35.9999968840911,
                "s": [83, 101.7, 100]
            }],
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
                "k": [592.261, 69.738],
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
            "ty": "st",
            "c": {
                "a": 0,
                "k": [1, 0.905528229358, 0.687392769608, 1],
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
                "k": [lottiecolors[0][0], lottiecolors[0][1], lottiecolors[0][2], 1], //Nero sfondo
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
                "k": [-469.161, 356.348],
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
    "op": 156.999986411175,
    "st": 0,
    "bm": 0
}, {
    "ddd": 0,
    "ind": 8,
    "ty": 4,
    "nm": "Shape Layer 3",
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
            "k": [-768.692, 356.348, 0],
            "ix": 2
        },
        "a": {
            "a": 0,
            "k": [-765.292, 356.348, 0],
            "ix": 1
        },
        "s": {
            "a": 1,
            "k": [{
                "i": {
                    "x": [0, 0.667, 0.667],
                    "y": [1, 1, 1]
                },
                "o": {
                    "x": [0.167, 0.167, 0.167],
                    "y": [0.167, 0, 0]
                },
                "t": 5,
                "s": [-0.019, 99.517, 100]
            }, {
                "t": 24.9999978361744,
                "s": [86.981, 99.517, 100]
            }],
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
                "k": [592.261, 69.738],
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
            "ty": "st",
            "c": {
                "a": 0,
                "k": [1, 0.905528229358, 0.687392769608, 1],
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
                "k": [1, 0.521691116632, 0, 1],
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
                "k": [-469.161, 356.348],
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
    "op": 156.999986411175,
    "st": 0,
    "bm": 0
}, {
    "ddd": 0,
    "ind": 9,
    "ty": 4,
    "nm": "Shape Layer 4",
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
            "k": [-772.092, 356.348, 0],
            "ix": 2
        },
        "a": {
            "a": 0,
            "k": [-765.292, 356.348, 0],
            "ix": 1
        },
        "s": {
            "a": 1,
            "k": [{
                "i": {
                    "x": [0, 0.667, 0.667],
                    "y": [1, 1, 1]
                },
                "o": {
                    "x": [0.167, 0.167, 0.167],
                    "y": [0.167, 0, 0]
                },
                "t": 0,
                "s": [0, 99.5, 100]
            }, {
                "t": 15.9999986151516,
                "s": [92, 99.5, 100]
            }],
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
                "k": [592.261, 69.738],
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
            "ty": "st",
            "c": {
                "a": 0,
                "k": [1, 0.905528229358, 0.687392769608, 1],
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
                "k": [0, 0.702389526367, 1, 1],
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
                "k": [-469.161, 356.348],
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
    "op": 156.999986411175,
    "st": 0,
    "bm": 0
}, {
    "ddd": 0,
    "ind": 10,
    "ty": 4,
    "nm": "Shape Layer 8",
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
            "a": 1,
            "k": [{
                "i": {
                    "x": 0,
                    "y": 1
                },
                "o": {
                    "x": 0.167,
                    "y": 0.167
                },
                "t": 23,
                "s": [-772.25, 372.684, 0],
                "to": [0, 5.167, 0],
                "ti": [0, -5.167, 0]
            }, {
                "t": 72.9999936816292,
                "s": [-772.25, 403.684, 0]
            }],
            "ix": 2
        },
        "a": {
            "a": 0,
            "k": [-774, 403.684, 0],
            "ix": 1
        },
        "s": {
            "a": 0,
            "k": [99.6, 100, 100],
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
                "k": [547.52, 27.367],
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
            "ty": "st",
            "c": {
                "a": 0,
                "k": [1, 0.905528229358, 0.687392769608, 1],
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
                "k": [lottiecolors[3][0], lottiecolors[3][1], lottiecolors[3][2], 1], //Azzurro sotto
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
                "k": [-500.24, 403.684],
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
    "ip": 22.9999980092804,
    "op": 156.999986411175,
    "st": -8.99999922102278,
    "bm": 0
}, {
    "ddd": 0,
    "ind": 11,
    "ty": 5,
    "nm": funzione,
    "parent": 1,
    "tt": 1,
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
                    "x": 0.167,
                    "y": 0.167
                },
                "t": 31,
                "s": [-730.305, 383.359, 0],
                "to": [0, 4.917, 0],
                "ti": [0, -4.917, 0]
            }, {
                "t": 82.999992816099,
                "s": [-730.305, 412.859, 0]
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
    "t": {
        "d": {
            "k": [{
                "s": {
                    "s": 22.1000003814697,
                    "f": "AlteHaasGrotesk",
                    "t": funzione,
                    "j": 0,
                    "tr": -32,
                    "lh": 26.5200004577637,
                    "ls": 1,
                    "fc": [lottiecolors[5][0], lottiecolors[5][1], lottiecolors[5][2]], //Colore funzione
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
        "a": []
    },
    "ip": 22.9999980092804,
    "op": 156.999986411175,
    "st": -8.99999922102278,
    "bm": 0
}, {
    "ddd": 0,
    "ind": 12,
    "ty": 4,
    "nm": "Shape Layer 5",
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
            "a": 1,
            "k": [{
                "i": {
                    "x": 0,
                    "y": 1
                },
                "o": {
                    "x": 0.167,
                    "y": 0.167
                },
                "t": 23,
                "s": [-772.25, 372.684, 0],
                "to": [0, 5.167, 0],
                "ti": [0, -5.167, 0]
            }, {
                "t": 72.9999936816292,
                "s": [-772.25, 403.684, 0]
            }],
            "ix": 2
        },
        "a": {
            "a": 0,
            "k": [-774, 403.684, 0],
            "ix": 1
        },
        "s": {
            "a": 0,
            "k": [99.6, 100, 100],
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
                "k": [547.52, 27.367],
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
            "ty": "st",
            "c": {
                "a": 0,
                "k": [1, 0.905528229358, 0.687392769608, 1],
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
                "k": [0.166228440229, 0.438701465083, 0.554151348039, 1], //Azzurro sotto
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
                "k": [-500.24, 403.684],
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
    "ip": 22.9999980092804,
    "op": 156.999986411175,
    "st": -8.99999922102278,
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
