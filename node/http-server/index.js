const http = require('http');
var server = http.createServer()
server.on('request', function (request, response) {
    response.write('hello nodejs\r\n');
    response.end();
})
  
server.listen(3001, function () {
    console.log('服务器启动成功了，可以通过 http://127.0.0.1:3001/ 来进行访问');
})