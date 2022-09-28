import { INews } from "../domain/newsEntity";
import { NewsValue } from "../domain/newsValue";
import {INewsRepository} from '../domain/INewsRepository';
import { Schema ,Types} from "mongoose";

export class NewsUseCase {
    constructor(private useCase: INewsRepository){}

    public getAllNews = async() => {
         const news = await this.useCase.getAllNews();
         return news;
    }

    public getNewsById = async (id:string) => {
        const news = await this.useCase.getNewsById(id);
        return news;
    }

    public createNews = async({name,content,image,category} :{name:string,content:string,image:string|null,category : Types.ObjectId|null})=>{
        const newNews = new NewsValue({name,content,image,category});
        const news = await this.useCase.createNews(newNews);
        return news;
    }

    public deleteNews = async (id:string) => {
        const news = await this.useCase.deleteNews(id);
        return news;
    }

    public updateNews = async(id:string,{name,content,image,category}:{name:string,content:string,image:string,category:Types.ObjectId|null})=>{
        const updateNews = new NewsValue({name,content,image,category});
        const news = await this.useCase.updateNews(id,updateNews);
        return news;
    }
}