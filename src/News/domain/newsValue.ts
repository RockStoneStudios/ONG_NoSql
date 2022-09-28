import {  Types } from 'mongoose';
import {INews} from '../domain/newsEntity';

export class NewsValue implements INews {
    declare name: string;
    declare content: string;
    declare image: string | null;
    declare category: Types.ObjectId | null;

    constructor({name,content,image,category}:{name:string,content:string,image:string |null,category:Types.ObjectId | null}){
        this.name = name;
        this.content = content;
        this.image = image;
        this.category = category;
    }
}