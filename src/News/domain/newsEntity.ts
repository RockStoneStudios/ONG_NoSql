import { Types} from "mongoose";

export interface INews {
    name : string;
    content : string;
    image : string |null;
    category? : Types.ObjectId | null;
}