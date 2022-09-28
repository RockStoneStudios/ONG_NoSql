import { Types} from "mongoose";
import { ICategory  } from "./categoryEntity";

export class CategoryValue implements ICategory {
    declare name: string; 
    declare description: string;
    declare image?: string | null;
    declare news: Types.ObjectId[] | null;

    constructor({name,description,image,news}:{name : string,description:string,image:string|null,news:Types.ObjectId[] |null}){
        this.name = name;
        this.description = description;
        this.image= image;
    }
}