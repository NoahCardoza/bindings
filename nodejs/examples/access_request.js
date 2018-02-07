var WebSocketServer = require('../dist/uws').Server;
var wss = new WebSocketServer({ port: 1337 });

wss.on('connection', (ws) => {
  //  ws.request allows you to access the original request data

  var payload = JSON.stringify({
    url : ws.request.url,
    headers : ws.request.headers
  }, null, 2);

  console.log(payload);
  ws.send(payload);
});
