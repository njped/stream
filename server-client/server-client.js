// Server Code .
const net = require('net');
const server = net.createServer((socket) => {
  console.log('Welcome to Echo Server\r\n');
  socket.on('data', (chunk) => {
    socket.write(chunk);
  });
  socket.on('end', socket.end);
});

server.listen(3000, () => {
  console.log('server is up');
});

// Client Code  
const net = require('net');
const client = net.createConnection({ port: 3000 }, () => { // once connected .
  console.log('connected to server!');
  client.write('1 ... Anyone there!\r\n');
  client.write('2 ... What did you say!\r\n');
});
client.on('data', (data) => {
  console.log("Msg from server:" + data.toString());
  client.end();
});
client.on('end', () => {
  console.log('End of Message');
});






