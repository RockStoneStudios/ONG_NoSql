import { Types } from 'mongoose';
import {IUserRepository} from '../domain/IUserRepository';
import { UserValue } from '../domain/userValue';

export class UserUseCase {
    constructor (private readonly useCase:IUserRepository){}

    public getAllUser = async() => {
        const users = await this.useCase.getAllUser();
        return users;
    }
    public registerUser = async({id,firstName,lastName,age,email,password,photo,roleId,is_deleted}:
        {id:string,firstName:string,lastName:string,age:number,email:string,password:string,photo:string,roleId:Types.ObjectId|null,is_deleted:boolean})=>
    {
            const newUserValue = new UserValue({id,firstName,lastName,age,email,password,photo,roleId,is_deleted});
            const  newUser = await this.useCase.registerUser(newUserValue);
            return newUser; 
     }
     public getUserById = async(id:string) =>{
         const user = await this.useCase.getUserById(id);
         return user;
     }

     public updatedUser = async (idUser:string,{id,firstName,lastName,age,email,password,photo,roleId,is_deleted}:
        {id:string,firstName:string,lastName:string,age:number,email:string,password:string,photo:string,roleId:Types.ObjectId|null,is_deleted:boolean})=>{
          const newUserValue = new UserValue({id,firstName,lastName,age,email,password,photo,roleId,is_deleted});
           const updatedUser = await this.useCase.updatedUser(idUser,newUserValue);
           return updatedUser;   
        }
      public deletedUser = async(id:string)=>{
         const userDeleted = await this.useCase.deletedUser(id);
         return userDeleted;
      }

      public getUserByEmail = async(email:string) => {
        const userByEmail = await this.useCase.getUserByEmail(email);
        return userByEmail;
      } 

      public loginUser = async(email:string,password:string) => {
          const userLlogin = await this.useCase.loginUser(email,password);
      }
}