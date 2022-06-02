const socket = io(settings.socket);

let timer = 1000;
socket.on("connect", () => {
    timer = 1000;
    socket.emit("init");
    sendAlert("Connesso al socket con successo", "success", true, 2000)
});


socket.on("connect_error", (reason) => {
    if(document.querySelector("#alerts").children.length === 0){
        sendAlert("Impossibile connettersi al server", "danger", false)
    }

    console.groupCollapsed("%c Impossibile connettersi al socket", "font-weight: bold; color: red;");
    console.error(reason)
    console.log("%c Riprovo fra " + timer/1000 + " secondi", "font-weight: bold; background: yellow; color: black");
    console.groupEnd();

    setTimeout(() => {
        socket.connect();
        timer += 100;
      }, timer);
});

socket.on('init', (gameSet) => {
    gameSettings = gameSet
    updateScores();
});
socket.on('addPoint', ({team, set}) => addPoint(team, set))
socket.on('subPoint', ({team, set}) => subPoint(team, set))
socket.on('changeSet', (set) => changeSet(set))
socket.on('reset', (gameSet) => {
    gameSettings = gameSet
    updateScores();
    removeServe()
})

socket.on('grafic', ({grafic, page}) => showGrafic(page, grafic))