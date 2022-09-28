import {model,Schema,Types} from 'mongoose';
import { INews } from '../../domain/newsEntity';


const NewsSchema = new Schema <INews> ({
    name : {
        type : String,
        required : true
    },
    content : {
        type : String,
        required : true
    },
    image : {
        type : String,
        
    },
    category : {
        type: Schema.Types.ObjectId,
        ref : 'Category'
    },

},{
     timestamps : false,
     versionKey : false
});

export default model <INews>('News',NewsSchema);