import { Types } from "mongoose";
import { IRole } from "./roleEntity";


export class RoleValue implements IRole {

    declare name: string;
    declare description: string;
    declare users: Types.ObjectId[] | null;

     constructor({name,description,users}:{name:string,description:string,users:Types.ObjectId[]|null}){
         this.name = name;
         this.description = description;
         this.users = users;

     }

}