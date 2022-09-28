import { INews } from "./newsEntity";

export interface INewsRepository {
    getAllNews():Promise<INews[]|null>;
    createNews (news:INews):Promise<INews|null>;
    getNewsById (id:string): Promise<INews|null>;
    deleteNews (id:string) : Promise<INews|null>;
    updateNews(id:string,news:INews):Promise<INews|null>
}