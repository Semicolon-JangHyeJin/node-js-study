//한번에 여러서버 실행
const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>Hello Node!</h1>');
    res.write('<p>Hello server ^^</p>');
    res.end('<p>Bye ~</p>');
})
    .listen(8080, ()=>{ //서버 연결1
        console.log('8080번 포트에서 서버 대기 중입니다.');
    });
    
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>Hello Node!</h1>');
    res.write('<p>Hello server ^^</p>');
    res.end('<p>Bye ~</p>');
})
    .listen(8081, ()=>{ //서버 연결2
        console.log('8081번 포트에서 서버 대기 중입니다.');
    });
