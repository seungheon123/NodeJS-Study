const http = require('http');
http.createServer((req,res)=>{
    //res.writeHead는 응답에 대한 정보를 기록하는 메서드이다
    //첫 번쨰 인수로 성공적인 요청임을 의미하는 200
    //두 번째 인수로 응답에 대한 정보를 보낸다. 콘텐츠의 형식이 HTML임을 알리고 있다
    res.writeHead(200,{'COntent-type':'text/html; charset=utf-8'}); 
    //res.write 메서드의 첫 번쨰 인수는 클라이언트로 보낼 데이터이다.
    res.write('<h1>Hello Node!<h1>')
    //res.end는 응답을 종료하는 메서드이다. 만약 인수가 있다면 그 데이터도 클라이언트로 보내고 응답을 종료한다.
    res.end('<p>Hello Server<p>');
})
    .listen(8080,()=>{
        console.log('8080번 포트에서 서버 대기중입니다');
    })