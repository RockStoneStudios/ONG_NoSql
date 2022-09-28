import {Request,Response} from 'express';
import {ICategory} from '../../domain/categoryEntity';
import {CategoryUseCase} from '../../application/categoryUseCase';


export class CategoryController {
    constructor(private categoryCase : CategoryUseCase){}
    
      public getAllCategories = async (req:Request,res:Response) :Promise<ICategory|Response>=>{
         try{
             const categories = await this.categoryCase.getAllCategory();
             return res.status(200).json(categories);
         }catch(error){
            return res.status(500).json(error);
         }
      }

      public createCategory = async (req:Request,res:Response): Promise<ICategory|Response> => {
        try{
           const category = await this.categoryCase.createCategory(req.body);
           return res.status(200).json(category);
        }catch(error){
            return res.status(500).json(error);
        }
      }

      public getCategoryById = async(req:Request,res:Response):Promise<ICategory|Response> => {
        try{
            const category = await this.categoryCase.getCategoryById(req.params.id);
            return res.status(200).json(category);
        }catch(error){
            return res.status(500).json(error);
        }
      }

      public deleteCategory = async(req:Request,res:Response):Promise<ICategory|Response> => {
           try{
               const category = await this.categoryCase.deleteCategory(req.params.id);
               return res.status(200).json(category);
           }catch(error){
             return res.status(500).json(error);
           }
      }
     
      public updateCategory = async(req:Request,res:Response) : Promise <ICategory|Response> => {
        try{
             const category = await this.categoryCase.updateCategory(req.params.id,req.body);
             return res.status(200).json(category);
        }catch(error){
            return res.status(500).json(error);
        }
      }
}
