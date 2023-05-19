const http = require('http');
const fs = require('fs').promises;

http.createServer(async (req,res)=>{
    try{
        const data = await fs.readFile('./server2.html'); //fs 모듈로 HTML 파일을 읽어서 data 변수에 저장한다
        res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
        res.end(data); //data 변수에 저장된 버퍼를 그대로 클라이언트에게 보낸다
    }catch(err){
        console.error(err);
        res.writeHead(500,{'Content-Type':'text/plain; charset=utf-8'});
        res.end(err.message);
    }
})
    .listen(8081,()=>{
        console.log('8081번 포트에서 서버 대기 중입니다');
    })