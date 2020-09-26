
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>Hello Node!</h1>');
    res.write('<p>Hello server ^^</p>');
    res.end('<p>Bye ~</p>');
});
server.listen(8080);
//listen 콜백 대신 이벤트 리스너 붙이기

server.on('listening', ()=>{ //서버 연결
    console.log('8080번 포트에서 서버 대기 중입니다.');
});
server.on('error', console.log);
    
