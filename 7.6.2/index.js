import userRouter from "./src/app/User/userRoute.js";
import app from "./config/express.js";
import dotenv from "dotenv";

dotenv.config();

app.use('/',userRouter);

app.listen(3000,()=>{
    console.log('server is listening 3000')
})