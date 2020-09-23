var bc = new BroadcastChannel('obs-lower-thirds-channel');
bc.onmessage = function (ev) {
  received_data=ev.data.split("|");
  var animazione = received_data[0];
  var nome = received_data[1];
  var funzione = received_data[2];
  var position = received_data[3];
if (animazione == "lower2"){
  var lottiecolors = [
      [(colori.lower2.sfondo1[0]/255), (colori.lower2.sfondo1[1]/255), (colori.lower2.sfondo1[2]/255)], //Rettangolo
      [(colori.lower2.text1[0]/255), (colori.lower2.text1[1]/255), (colori.lower2.text1[2]/255)], //Nome
      [(colori.lower2.text2[0]/255), (colori.lower2.text2[1]/255), (colori.lower2.text2[2]/255)], //Ruolo
  ];
  console.log ('Name: ' + received_data[1] + ', Function: ' + received_data[2] + ', Position: ' + received_data[3]);
  console.log("Lottie Colors");
  console.log (JSON.stringify(lottiecolors, null, 4));

if (position == 'left') {document.getElementById("lottie").classList.remove("right");};
if (position == 'right') {document.getElementById("lottie").classList.add("right");};



var animationData = {
    "v": "5.7.1",
    "fr": 60,
    "ip": 0,
    "op": 260,
    "w": 1920,
    "h": 1080,
    "nm": "BANNER_DSELEONORAMATTEO",
    "ddd": 0,
    "assets": [],
    "fonts": {
        "list": [{
            "origin": 3,
            "fPath": "fonts/GlacialIndifference-Regular.otf",
            "fClass": "",
            "fFamily": "Glacial Indifference",
            "fWeight": "",
            "fStyle": "Regular",
            "fName": "GlacialIndifference-Regular",
            "ascent": 83.0871973354369
        }, {
            "origin": 3,
            "fPath": "fonts/GlacialIndifference-Bold.otf",
            "fClass": "",
            "fFamily": "Glacial Indifference",
            "fWeight": "700",
            "fStyle": "Bold",
            "fName": "GlacialIndifference-Bold",
            "ascent": 79.0588770229369
        }]
    },
    "layers": [{
        "ddd": 0,
        "ind": 1,
        "ty": 4,
        "nm": "Livello forma 1",
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
                "k": [403.625, 540, 0],
                "ix": 2
            },
            "a": {
                "a": 0,
                "k": [0, 0, 0],
                "ix": 1
            },
            "s": {
                "a": 0,
                "k": [0.148, 100, 100],
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
                    "k": [1151, 136],
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
                "nm": "Tracciato rettangolo 1",
                "mn": "ADBE Vector Shape - Rect",
                "hd": false
            }, {
                "ty": "st",
                "c": {
                    "a": 0,
                    "k": [0, 0, 0, 1],
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
                "nm": "Traccia 1",
                "mn": "ADBE Vector Graphic - Stroke",
                "hd": false
            }, {
                "ty": "fl",
                "c": {
                    "a": 0,
                    "k": [lottiecolors[0][0], lottiecolors[0][1], lottiecolors[0][2], 1],
                    "ix": 4
                },
                "o": {
                    "a": 0,
                    "k": 100,
                    "ix": 5
                },
                "r": 1,
                "bm": 0,
                "nm": "Riempimento 1",
                "mn": "ADBE Vector Graphic - Fill",
                "hd": false
            }, {
                "ty": "tr",
                "p": {
                    "a": 1,
                    "k": [{
                        "i": {
                            "x": 0.667,
                            "y": 1
                        },
                        "o": {
                            "x": 0.333,
                            "y": 0
                        },
                        "t": 4,
                        "s": [2044.929, 395],
                        "to": [64026.047, 0],
                        "ti": [-235962.422, 0]
                    }, {
                        "i": {
                            "x": 0.667,
                            "y": 1
                        },
                        "o": {
                            "x": 0.333,
                            "y": 0
                        },
                        "t": 18,
                        "s": [386201.214, 395],
                        "to": [235962.422, 0],
                        "ti": [64026.047, 0]
                    }, {
                        "i": {
                            "x": 0.667,
                            "y": 1
                        },
                        "o": {
                            "x": 0.333,
                            "y": 0
                        },
                        "t": 30,
                        "s": [1417819.5, 395],
                        "to": [-64026.047, 0],
                        "ti": [171936.375, 0]
                    }, {
                        "i": {
                            "x": 0.667,
                            "y": 1
                        },
                        "o": {
                            "x": 0.333,
                            "y": 0
                        },
                        "t": 244,
                        "s": [2044.929, 395],
                        "to": [-10779.672, 0],
                        "ti": [-88801.984, 0]
                    }, {
                        "i": {
                            "x": 0.667,
                            "y": 1
                        },
                        "o": {
                            "x": 0.333,
                            "y": 0
                        },
                        "t": 258,
                        "s": [386201.214, 395],
                        "to": [235962.422, 0],
                        "ti": [-171936.375, 0]
                    }, {
                        "t": 270,
                        "s": [1417819.5, 395]
                    }],
                    "ix": 2
                },
                "a": {
                    "a": 0,
                    "k": [0, 0],
                    "ix": 1
                },
                "s": {
                    "a": 1,
                    "k": [{
                        "i": {
                            "x": [0.667, 0.667],
                            "y": [1, 1]
                        },
                        "o": {
                            "x": [0.333, 0.333],
                            "y": [0, 0]
                        },
                        "t": 4,
                        "s": [187.796, 100]
                    }, {
                        "i": {
                            "x": [0.667, 0.667],
                            "y": [1, 1]
                        },
                        "o": {
                            "x": [0.333, 0.333],
                            "y": [0, 0]
                        },
                        "t": 18,
                        "s": [67142.297, 100]
                    }, {
                        "i": {
                            "x": [0.667, 0.667],
                            "y": [1, 1]
                        },
                        "o": {
                            "x": [0.333, 0.333],
                            "y": [0, 0]
                        },
                        "t": 244,
                        "s": [187.796, 100]
                    }, {
                        "t": 258,
                        "s": [67142.297, 100]
                    }],
                    "ix": 3
                },
                "r": {
                    "a": 0,
                    "k": 0,
                    "ix": 6
                },
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
                        "t": 0,
                        "s": [0]
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
                        "s": [100]
                    }, {
                        "i": {
                            "x": [0.833],
                            "y": [0.833]
                        },
                        "o": {
                            "x": [0.167],
                            "y": [0.167]
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
                            "y": [0.167]
                        },
                        "t": 32,
                        "s": [0]
                    }, {
                        "i": {
                            "x": [0.833],
                            "y": [0.833]
                        },
                        "o": {
                            "x": [0.167],
                            "y": [0.167]
                        },
                        "t": 242,
                        "s": [0]
                    }, {
                        "t": 244,
                        "s": [100]
                    }],
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
            "nm": "Rettangolo 1",
            "np": 3,
            "cix": 2,
            "bm": 0,
            "ix": 1,
            "mn": "ADBE Vector Group",
            "hd": false
        }],
        "ip": 0,
        "op": 260,
        "st": 0,
        "bm": 0
    }, {
        "ddd": 0,
        "ind": 2,
        "ty": 5,
        "nm": "Persona",
        "sr": 1,
        "ks": {
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
                    "t": 16,
                    "s": [0]
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
                    "s": [100]
                }, {
                    "i": {
                        "x": [0.833],
                        "y": [0.833]
                    },
                    "o": {
                        "x": [0.167],
                        "y": [0.167]
                    },
                    "t": 254,
                    "s": [100]
                }, {
                    "t": 256,
                    "s": [0]
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
                "k": [403, 920, 0],
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
                        "s": 52,
                        "f": "GlacialIndifference-Bold",
                        "t": nome,
                        "j": 0,
                        "tr": 22,
                        "lh": 62.4,
                        "ls": 0,
                        "fc": [lottiecolors[1][0], lottiecolors[1][1], lottiecolors[1][2]],
                        "sc": [1, 1, 1],
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
        "ip": 0,
        "op": 260,
        "st": 0,
        "bm": 0
    }, {
        "ddd": 0,
        "ind": 3,
        "ty": 5,
        "nm": "Funzione",
        "sr": 1,
        "ks": {
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
                    "t": 16,
                    "s": [0]
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
                    "s": [100]
                }, {
                    "i": {
                        "x": [0.833],
                        "y": [0.833]
                    },
                    "o": {
                        "x": [0.167],
                        "y": [0.167]
                    },
                    "t": 254,
                    "s": [100]
                }, {
                    "t": 256,
                    "s": [0]
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
                "k": [403, 980, 0],
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
                        "s": 52,
                        "f": "GlacialIndifference-Regular",
                        "t": funzione,
                        "j": 0,
                        "tr": 18,
                        "lh": 62.4,
                        "ls": 0,
                        "fc": [lottiecolors[2][0], lottiecolors[2][1], lottiecolors[2][2]],
                        "sc": [1, 1, 1],
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
        "ip": 0,
        "op": 260,
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
