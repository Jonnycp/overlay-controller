const { Server } = require("socket.io");
const http = require('http');
const gameSettings = require("./teams.json")

const server = http.createServer();
const io = new Server(server, { cors: { origin: '*' } });

io.on('connection', (socket) => {
    console.log('[+] Un utente si è connesso');

    socket.on('disconnect', () => {
        console.log('[-] Un utente si è disconnesso');
      });
    
    socket.on('init', () => {
      io.emit('init', gameSettings);
    });

    socket.on('addPoint', ({team, set}) => {
      if(gameSettings.teams[team.id-1].points[set]+1 <= gameSettings.sets["max-points"]){
          gameSettings.teams[team.id-1].points[set]++;
          io.emit('addPoint', {team, set});
          console.log('SCORE: +1 per ' + team.name);
      }      
    });

    socket.on('subPoint', ({team, set}) => {
      if(gameSettings.teams[team.id-1].points[set]-1 >= 0){
        io.emit('subPoint', {team, set});
        gameSettings.teams[team.id-1].points[set]--;
        console.log('SCORE: -1 per ' + team.name);
      }
    });

    socket.on('changeSet', (set) => {
      set++;
      if(set > 0 && set <= gameSettings.sets.number){
        io.emit('changeSet', set);
        gameSettings.sets["current-set"] = set;
        console.log('SET: ' + gameSettings.sets["current-set"]);
      }
    });

    socket.on('reset', () => {
      gameSettings.sets["current-set"] = 1;
      gameSettings.teams.forEach(team => {
        team.points = [0, 0, 0]
      })
      io.emit('reset', gameSettings);
      console.log("RESET");
    });

    socket.on('grafic', ({grafic, page}) => {
      io.emit('grafic', {grafic, page});
      console.log("[GRAFICA] " + grafic.name + " - " + page.name);
    });
});

server.listen(3000, () => {
    console.log('In ascolto sulla porta 3000');
  });