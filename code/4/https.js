
const https = require('https'); //https모듈
const fs = require('fs');

https.createServer({
  cert: fs.readFileSync('도메인 인증서 경로'), //인증서가 있다면
  key: fs.readFileSync('도메인 비밀키 경로'),  //입력할수 있겠지만
  ca: [
    fs.readFileSync('상위 인증서 경로'), //인증서를 받는게
    fs.readFileSync('상위 인증서 경로'), //어렵다고 한다
  ],
}, (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write('<h1>Hello Node!</h1>');
  res.end('<p>Hello Server!</p>');
})
  .listen(443, () => {
    console.log('443번 포트에서 서버 대기 중입니다!');
  });
