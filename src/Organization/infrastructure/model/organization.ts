import {model,Schema} from 'mongoose';
import { IOrganization } from '../../domain/organizationEntity';

const OrganizationSchema = new Schema<IOrganization>({
    name : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : false,
        default : null
    },
    phone : {
        type : Number,
        required : false
    },
    email : {
        type :String,
        required : true
    },
    welcomeText : {
        type : String,
        required : false,
        default : 'Hello Organization'
    },
    aboutUsText : {
        type : String,
        required : false
    },
    delete_at : {
        type :Date,
        default : null
    },
    slide : {
        type : Schema.Types.ObjectId,
        ref : 'Slide'
    }

},{
     timestamps : false,
     versionKey : false,
     
});

export default model <IOrganization>('Organization',OrganizationSchema);