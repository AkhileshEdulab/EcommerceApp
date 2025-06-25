
import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import  {connection}  from './Database/connection.js';
import userRouter from './Routes/UserRoute.js';
import { config } from 'dotenv';

const app = express();
config({path:'./Config/config.env'});


app.use(cors({
    origin:[],
    methods:["POST","GET","PUT","DELETE"],
    credentials:true
}
));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(helmet({
    crossOriginResourcePolicy:false
}));

app.use('/api/user',userRouter)
connection();

export default app;