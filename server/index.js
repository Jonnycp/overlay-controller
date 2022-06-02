const { Server } = require("socket.io");
const http = require('http');

const server = http.createServer();
const io = new Server(server, { cors: { origin: '*' } });

io.on('connection', (socket) => {
    console.log('[+] Un utente si è connesso');
    socket.on('disconnect', () => {
        console.log('[-] Un utente si è disconnesso');
      });
    
});

server.listen(3000, () => {
    console.log('In ascolto sulla porta 3000');
  });