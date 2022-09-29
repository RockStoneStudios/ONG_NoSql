import express ,{Application} from 'express';
import dotenv from 'dotenv';
import db from './database/conection';
import userRouter from './User/infrastructure/Router/user';
import roleRouter from './Role/infrastructure/Router/role';
import categoryRouter from './Category/infrastructure/Router/category';
import newsRouter from './News/infrastructure/Router/news';
import memberRouter from './Member/infrastructure/Router/member';
import organizationRouter from './Organization/infrastructure/Router/organization';

class Server {
    private app:Application;
    private port : number;
    private api  = {
         user : '/api/user',
         role : '/api/role',
         category : '/api/category',
         news : '/api/news',
         memeber : '/api/member',
         organization : '/api/organization'
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
         this.app.use(this.api.role,roleRouter);
         this.app.use(this.api.category,categoryRouter);
         this.app.use(this.api.news,newsRouter);
         this.app.use(this.api.memeber,memberRouter);
         this.app.use(this.api.organization,organizationRouter);
    }
}

new Server();