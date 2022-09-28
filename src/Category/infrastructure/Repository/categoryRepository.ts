import Category from "../model/category";
import {ICategoryRepository} from '../../domain/ICategoryRepository';
import { ICategory } from "../../domain/categoryEntity";

export class MongoRepository implements ICategoryRepository {

    async getAllCategories(): Promise<ICategory[] | null> {
        const categories = await Category.find().populate({path : 'news',select : '-_id -category'});
        return categories;
    }

    async createCategory(category: ICategory): Promise<ICategory | null> {
        const newCategory = new Category(category);
        await newCategory.save();
        return newCategory;
    }
    async getCategoryById(id: string): Promise<ICategory | null> {
        const category = await Category.findById(id);
        return category;
    }

    async deleteCategory(id: string): Promise<ICategory | null> {
        const category = await Category.findByIdAndDelete(id);
        return category;
    }

    async updateCategory(id: string, category: ICategory): Promise<ICategory | null> {
        const updateCategory = await Category.findByIdAndUpdate(id,category,{new :true});
        return updateCategory;
    }
}