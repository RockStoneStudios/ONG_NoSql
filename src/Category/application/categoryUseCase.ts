import {ICategory} from '../domain/categoryEntity';
import {ICategoryRepository} from '../domain/ICategoryRepository';
import {CategoryValue} from '../domain/categoryValue';
import { Types } from 'mongoose';


export class CategoryUseCase {
    constructor (private readonly useCase:ICategoryRepository){}

    public getAllCategory = async () => {
         const categories = await this.useCase.getAllCategories();
         return categories;
    }
    public getCategoryById = async(id:string)=> {
        const category = await this.useCase.getCategoryById(id);
        return category;
    }
    public createCategory = async({name,description,image,news}:{name:string,description:string,image:string,news:Types.ObjectId[] |null})=>{
        const newCategory = new CategoryValue({name,description,image,news});
        const category = await this.useCase.createCategory(newCategory);
        return category;

    }

    public deleteCategory = async(id:string) => {
        const category = await this.useCase.deleteCategory(id);
        return category;
    }
    public updateCategory = async(id:string,{name,description,image,news}:
        {name:string,description:string,image :string,news :Types.ObjectId[] | null}) =>{
          const updateCategory = new CategoryValue({name,description,image,news});
         const category = await this.useCase.updateCategory(id,updateCategory);
         return category;
    }



}