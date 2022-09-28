import {model,Schema} from 'mongoose';
import { IRole } from '../../domain/roleEntity';

const RoleSchema = new Schema<IRole> ({
     name : {
        type : String,
        required : true
     },
     description : {
        type : String,
        required : true
     },
     users :[{
        type : Schema.Types.ObjectId,
        ref : 'User'
     }],
    },{
        timestamps : false,
        versionKey : false
    
});

export default model <IRole>('Role',RoleSchema);