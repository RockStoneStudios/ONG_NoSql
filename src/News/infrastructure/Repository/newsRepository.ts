import {INews} from '../../domain/newsEntity';
import {INewsRepository} from '../../domain/INewsRepository';
import News from '../model/news';
import Category from '../../../Category/infrastructure/model/category';
import { Schema } from 'mongoose';

export class MongoRepository implements INewsRepository {
    async getAllNews(): Promise<INews [] | null>  {
        const news = await News.find().populate({path : 'category'});
        return news;
    }
    async getNewsById(id: string): Promise<INews | null> {
        const news = await News.findById(id);
        return news
    }
    async createNews(news: INews): Promise<INews | null> {
        const newNews = new News(news);
        const category = await Category.findById(newNews.category);
        newNews.category = category?._id;
        await newNews.save();
        category?.news?.push(newNews?._id);
        category?.save();
        return newNews;
    }
    async deleteNews(id: string): Promise<INews | null> {
        const news = await News.findByIdAndDelete(id);
        return news;
    }
    async updateNews(id: string, news: INews): Promise<INews | null> {
        const updateNews = await News.findByIdAndUpdate(id,news,{new :true});
        return updateNews;
    }
}