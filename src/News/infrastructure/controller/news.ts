import {Request,Response} from 'express';
import {NewsUseCase} from '../../application/newsUseCase';
import { INews } from '../../domain/newsEntity';


export class NewsController {
    constructor (private newsCase :NewsUseCase){}

    public getAllNews = async (req:Request,res:Response):Promise<INews[]|Response> =>{ 
         try{
            const news = await this.newsCase.getAllNews();
            return res.status(200).json(news);
         }catch(error){
            return res.status(500).json(error);
         }
    }

    public getNewsById = async(req:Request,res:Response):Promise<INews|Response>=> {
        try{
             const news = await this.newsCase.getNewsById(req.params.id);
             return res.status(200).json(news);
        }catch(error){
            return res.status(500).json(error);
        }
    }

    public createNews = async(req:Request,res:Response) : Promise<INews|Response> => {
        try{
             const news = await this.newsCase.createNews(req.body);
             return res.status(200).json(news);
        }catch(error){
            return res.status(500).json(error);
        }
    }

    public deleteNews = async (req:Request,res:Response) : Promise <INews|Response> => {
        try{
            const news = await this.newsCase.deleteNews(req.params.id);
            return res.status(200).json({message : `the News ${news?.name} has been Delete Successful`});
        }catch(error){
            return res.status(500).json(error);
        }
    }

    public updateNews = async (req:Request,res:Response) : Promise<INews | Response> => {
        try{
            const news = await this.newsCase.updateNews(req.params.id,req.body);
            return res.status(200).json({message : `The news ${news?.name} has been updated Successful`})
        }catch(error){
            return res.status(500).json(error);
        }
    }
}