const http = require('http');
const mysql = require('mysql');

const Con = mysql.createPool({
    connectionLimit: 100,
    host: 'mysql',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'testdb',
    connectTimeout: 10000 * 1000
});

let server = http.createServer();
server.on('request', function (request, response) {
    Con.getConnection(function (err, connection) {
        if (err) {
            console.log(err);
            console.log('数据库连接异常,请等待数据库启动。');
        } else {
            connection.query(`select * from user;`, (err, rows) => {
                connection.destroy();
                if (err) {
                    response.write(`${err}\r\n`);
                } else {
                    response.write(`${JSON.stringify(rows)}\r\n`);
                }
                response.end();
            });
        }
    });
})

server.listen(3001, function () {
    console.log('数据库连接成功...');
    console.log('服务器启动成功了，可以通过 http://127.0.0.1:3001/ 来进行访问');
})