import { Types } from "mongoose";

export interface IOrganization {
    name : string;
    image : string;
    address : string|null;
    phone : number | null;
    email : string;
    welcomeText:String;
    aboutUsText : string |null;
    delete_at : Date|null,
    slide : Types.ObjectId|null
}