import {model,Schema} from 'mongoose';
import { IMember } from '../../domain/memberEntity';

const MemberSchema = new Schema <IMember> ({
    name : {
        type : String,
        required : true
    },
    facebookUrl : {
        type : String,
    },
    instagramUrl : {
        type : String
    },
    linkedinUrl : {
        type : String
    },
    image : {
        type : String
    },
    description : {
        type : String
    }
},{
     timestamps : false,
     versionKey : false
});

export default model <IMember>('Member',MemberSchema);