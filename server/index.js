const { Server } = require("socket.io");
const http = require('http');
const gameSettings = require("./teams.json")
const grafics = require("./grafics.json")

const server = http.createServer();
const io = new Server(server, { cors: { origin: '*' } });

io.on('connection', (socket) => {
    console.log('[+] Un utente si è connesso');

    socket.on('disconnect', () => {
        console.log('[-] Un utente si è disconnesso');
      });
    
    socket.on('init', () => {
      io.emit('init', {gameSettings, grafics});
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

    socket.on('changeSet', ({teams, set}) => {
      set++;
      if(set > 0 && set <= gameSettings.sets.number){
        io.emit('changeSet', set);
        gameSettings.sets["current-set"] = set;
        checkWin(teams[0], teams[1], set)
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

    socket.on('grafic', ({grafic, page, index}) => {
      grafics.forEach(g => {
        if(g.name == page.name){
          g.grafics[index].show = !g.grafics[index].show
          io.emit('grafic', g.grafics[index]);
          console.log("[GRAFICA] " + grafic.name + " - " + page.name);
        }
      })
    });

    socket.on('scoreUpdate', (data) => {
      io.emit('scoreUpdate', data);
    });

    socket.on('changeTeam', (data) => {
      io.emit('changeTeam', data);
    });
});

server.listen(3000, () => {
    console.log('In ascolto sulla porta 3000');
  });

const checkWin = (team1, team2, set) => {
  set--;
  if(set == 0){
    set = 3;
  }
  let team1Points = team1.points[set-1];
  let team2Points = team2.points[set-1];
  
  if(team1Points > team2Points){
      team1.wins++;
      console.log(team1.name + " wins set " + set);
  }else if(team1Points < team2Points){
      team2.wins++;
      console.log(team2.name + " wins set " + set);
  }
}
