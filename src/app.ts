import express ,{Application} from 'express';
import dotenv from 'dotenv';
import db from './database/conection';
import userRouter from './User/infrastructure/Router/user';

class Server {
    private app:Application;
    private port : number;
    private api  = {
         user : '/api/user'
    }

    constructor(){
        dotenv.config();
        this.app = express();
        this.port = parseInt(<string>process.env.PORT);
        this.Middlewares();
        this.Listen();
        db;
        this.Routes();
    }

     public Middlewares() {
         this.app.use(express.json());
         this.app.use(express.urlencoded({extended : false}));
     }

    public Listen() {
         this.app.listen(this.port,()=>{
             console.log(`Starting Server on Port --> ${this.port}`);
         })
    }
    public Routes() {
         this.app.use(this.api.user,userRouter);
    }
}

new Server();