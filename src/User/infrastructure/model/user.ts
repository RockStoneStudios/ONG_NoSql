import {model,Schema,Types} from 'mongoose';
import { IUser } from '../../domain/userEntity';

const Userchema = new Schema <IUser> ({
     firstName : {
         type : String,
         required : true,
     },
     lastName : {
        type : String,
        required : true
     },
     age : {
        type : Number,
        required : true
     },
     email : {
        type : String,
        required : true,
        unique : true
     },
     password : {
        type : String,
        required : true,
        minlength : 6
     },
     photo : {
        type:String,
        required : false
     },
     role: {
         type : Types.ObjectId,
         ref : 'Rol'
     },
     is_deleted : {
        type : Boolean,
        default : false
     }

},{
     timestamps : false,
     versionKey : false
});


export default model <IUser>('User',Userchema);