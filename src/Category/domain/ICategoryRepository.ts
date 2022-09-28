import { ICategory } from "./categoryEntity";

export interface ICategoryRepository {
    getAllCategories ():Promise<ICategory[]|null>;
    createCategory (category:ICategory):Promise<ICategory|null>;
    getCategoryById (id:string):Promise<ICategory|null>;
    deleteCategory (id:string):Promise<ICategory|null>;
    updateCategory  (id:string,category:ICategory):Promise<ICategory|null>;


}