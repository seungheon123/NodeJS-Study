const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require("express-session");
const dotenv = require('dotenv').config();
const path = require('path');
const app = express();

app.set('port',process.env.PORT || 3000);
//morgan 미들웨어는 다음과 같이 사용한다
//app.use(morgan('dev))
//인수로 dev 외에 combined, common, short, tiny 등을 넣을 수 있다
//요청과 응답에 대한 정보를 콘솔에 기록한다
//dev 모드 기준으로 GET / 500 16.353 ms - 49는 각각 [HTTP 메서드][주소][HTTP 상태 코드][응답 속도]-[응답 바이트]를 의미한다
app.use(morgan('dev'));
app.use('/',express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave:false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie:{
        httpOnly: true,
        secure:false,
    },
    name:'session-cookie',
}));


//미들웨어는 app.use와 함께 사용된다. app.use(미들웨어) 형식이다
//app.use에 매개변수가 req,rex,next인 함수를 넣으면 된다.
//미들웨어는 위에서부터 아래로 순서대로 실행되고 next를 실행하지 않으면 다음 미들웨어가 실행되지 않는다
app.use((req,res,next)=>{
    console.log('모든 요청에 다 실행됩니다');
    next();
});

//app.use나 app.get 같은 라우터에 미들웨어를 여러 개 장착할 수 있다. 이때도 next를 호출해야지 다음 미들웨어로 넘어갈 수 있다.
app.get('/',(req,res,next)=>{
    console.log('GET / 요청에서만 실행됩니다');
    next();
},(req,res)=>{
    throw new Error('에러는 에러 처리 미들웨어로 갑니다')
});

app.use((err,req,res,next)=>{
    console.error(err);
    res.status(500).send(err.message);
});


app.listen(app.get('port'),()=>{});