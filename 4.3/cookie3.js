import express from "express";
import path, { dirname } from "path";
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get('/',(req,res)=>{
    const cookie = req.cookies.username;
    const fileName = fileURLToPath(import.meta.url);
    const dirName = dirname(fileName);
    const filePath = path.join(dirName,'/','cookie2.html');
    if(cookie){
        res.status(200).send(`${cookie}님 안녕하세요`);
    }else{
        try{
            res.status(200).sendFile(filePath,(err)=>{
                if(err){
                    console.error(err);
                    res.status(500).send("파일을 열 수 없습니다");
                }
            });
        }catch(err){
            res.status(500).send(err.message);
        }
    }
});

app.get('/login',async (req,res)=>{
    const name = req.query.name;
    const expires = new Date();
    expires.setMinutes(expires.getMinutes()+1);
    res.cookie("username",name,{expires});
    res.status(200).send(`${name}님 안녕하세요`);
})


app.listen(8084,()=>{
    console.log("8084번 포트에서 서버 대기중입니다");
})