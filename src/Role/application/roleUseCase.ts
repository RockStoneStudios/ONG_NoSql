import { IRoleRepository } from "../domain/IRoleRepository";
import { RoleValue } from "../domain/roleValue";
import { IRole } from "../domain/roleEntity";
import { Types } from "mongoose";


export class RoleUseCase  {
     constructor(private readonly useCase : IRoleRepository){}

     public getAllRole = async() => {
        const roles = await this.useCase.getAllRole();
        return roles;
     }

     public createRole = async ({name,description,users}:{name:string,description:string,users: Types.ObjectId[] |null})=>{
         const newRole = new RoleValue({name,description,users});
         const role = await this.useCase.createRole(newRole);
         return role;
     }
     public getRoleById = async (id:string) => {
         const role = await this.useCase.getRoleById(id);
         return role;
     }
     public deleteRole = async(id:string) => {
        const role = await this.useCase.deleteRole(id);
        return role;
     }

     public updateRole = async(id:string, {name,description,users}:{name:string,description:string,users : Types.ObjectId[] |null}) => {
        const newRole = new RoleValue({name,description,users});
        const update_role = await this.useCase.updatedRole(id,newRole);
        return update_role;
     }

}