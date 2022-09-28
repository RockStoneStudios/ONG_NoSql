import { Request,Response } from "express";
import {RoleUseCase} from '../../application/roleUseCase';
import { IRole } from "../../domain/roleEntity";


export class RoleController {
    constructor(private roleCase:RoleUseCase){}

    public getAllRoles = async (req:Request,res:Response) : Promise<IRole|Response> => {
         try {
             const roles = await this.roleCase.getAllRole();
             return res.status(200).json(roles);
         }catch(error){
            return res.status(500).json(error);
         }
    }
    public createRole = async (req:Request,res:Response) : Promise<IRole|Response> => {
        try { 
            const newRole = await this.roleCase.createRole(req.body);
            return res.status(201).json(newRole);
        }catch(error){
           return res.status(500).json(error);
        }
    }

    public getRoleById = async (req:Request,res:Response) : Promise<IRole|Response>=>{
        try{
            const role = await this.roleCase.getRoleById(req.params.id);
            return res.status(200).json(role);
        }catch(error){
            return res.status(500).json(error);
        }
    }

    public deleteRoleById = async (req:Request,res:Response) : Promise<IRole|Response> => {
        try { 
           const role = await this.roleCase.deleteRole(req.params.id);
           return res.status(200).json({message  : `The rol ${role?.name} has been deleted with successful`});
        }catch(error){
            return res.status(500).json(error);
        }
    }
    public updateRoleById = async (req:Request,res:Response) : Promise <IRole|Response> => {
        try{
              const role = await this.roleCase.updateRole(req.params.id,req.body);
               return res.status(200).json(role);
        }catch(error){
            return res.status(500).json(error);
        }
    }
}