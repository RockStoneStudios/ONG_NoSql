import {model,Schema, version} from 'mongoose';
import {IActivity} from '../../domain/activityEntity';


const ActivitySchema = new Schema<IActivity>({
     name : {
         type : String,
         required : true,
         unique :true
     },
     content : {
        type:String,
        required : true,
        minlength : 5
     },
     image:{
        type:String,
        required : true
     },
     is_deleted :{
        type : Boolean,
        default : false
     }

},{
     timestamps : false,
     versionKey:false
     
});

export default model <IActivity>('Activity',ActivitySchema);
