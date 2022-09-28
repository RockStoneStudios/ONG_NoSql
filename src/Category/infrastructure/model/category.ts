import {model,Schema,Types} from 'mongoose';
import { ICategory } from '../../domain/categoryEntity';

const CategorySchema = new Schema<ICategory>({
    name : {
        type: String,
        unique : true,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    image :{
        type : String,
        required : true
    },
    news : [
        {
            type : Schema.Types.ObjectId,
            ref : 'News'
        }
    ]
    
},{
     timestamps : false,
     versionKey : false
});

export default model <ICategory>('Category',CategorySchema);