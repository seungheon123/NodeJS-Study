const express = require('express');
const path = require('path');

const app = express();
//app.set('port',포트)로 서버가 실행될 포트를 설정합니다. process.env 객체에 PORT 속성이 있다면 그 값을 사용한다
//없다면 기본값으로 3000번 포트를 이용하도록 되어 있다.
app.set('port',process.env.PORT||3000);
//app.get(주소,라우터)는 주소에 대한 GET 요청이 올 때 어떤 동작을 할지 적는 부분입니다.
//익스프레스에서는 req.write이나 req.end 대신 res.send를 사용한다
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
});
app.listen(app.get('port'),()=>{
    console.log(app.get('port'),'번 포트에서 대기중');
});