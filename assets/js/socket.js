const socket = io(settings.socket);

let timer = 1000;
socket.on("connect", () => {
    timer = 1000;
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