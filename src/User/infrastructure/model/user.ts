import {model,Schema} from 'mongoose';
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
         type : Schema.Types.ObjectId,
         ref : 'Role'
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