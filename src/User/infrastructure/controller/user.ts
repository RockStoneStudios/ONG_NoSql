import {Request,Response} from 'express';
import {UserUseCase} from '../../application/userUseCases';
import { IUser } from '../../domain/userEntity';
import {encryptPassword} from '../utils/EncryptPassword';
import {passwordCompare} from '../utils/ComparePassword';
import { generateSignature } from '../middlewares/signature';

export class UserController {
    constructor(private userCase:UserUseCase){}

     public getAllUser = async(req:Request,res:Response):Promise<IUser[]|Response> => {
        try{
           const users = await this.userCase.getAllUser();
           return res.status(200).json(users);
        }catch(error){
            return res.status(500).json(error);
        }
     }
     public registerUser = async(req:Request,res:Response) : Promise<IUser|Response>=> {
        const newUser = req.body; 
        
        const user = await this.userCase.getUserByEmail(newUser.email);
        if (user) return res.status(400).json({message : "This User has been already Exist with this Email!!"});
        newUser.password = await encryptPassword(newUser.password);
      try{
          const user = await this.userCase.registerUser(newUser);
          return res.status(200).json({message : `The User ${newUser.firstName} has been created with Successful`});

         }catch(error){
            return res.status(500).json(error);
         }
    }
    public getUserById = async(req:Request,res:Response):Promise<IUser|Response> => {
        console.log(req.params.id);
        try{
             const user = await this.userCase.getUserById(req.params.id);
             return res.status(200).json(user);
        }catch(error){
            return res.status(500).json(error);
        }
    }

    public updateUserById = async(req:Request,res:Response) : Promise<IUser|Response> =>{
        try{
            const userUpdate = await this.userCase.updatedUser(req.params.id,req.body);
            return res.status(200).json(userUpdate);
        }catch(error){
            return res.status(500).json(error);
        }
    }
    public deleteUserById = async(req:Request,res:Response):Promise<IUser|Response> => {
        try{
           const userDelete = await this.userCase.deletedUser(req.params.id);
           return res.status(200).json(userDelete);
        }catch(error){
            return res.status(500).json(error);
        }
    }

    public loginUser = async(req:Request,res:Response):Promise<any> => {
        try{
              const saveUser = await this.userCase.getUserByEmail(req.body.email);
              if(!saveUser) return res.status(404).json({messsage : "User not found"});
              const comparePassword :boolean = await passwordCompare(req.body.password,saveUser.password);
              if(comparePassword) {
                const payload:any = {id : saveUser.id} 
                const token = await generateSignature(payload);
                return res.status(201).json({message : 'Login with Successful',token});
              }
        }catch(error){
            return res.status(500).json(error);
        }
    }
}