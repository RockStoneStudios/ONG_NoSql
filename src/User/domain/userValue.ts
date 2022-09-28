import { Types } from "mongoose";
import { IUser } from "./userEntity";

export class UserValue implements IUser {
  declare id: string;
  declare firstName: string;
  declare lastName: string;
  declare age: number;
  declare email: string;
  declare password: string;
  declare photo: string | null;
  declare role: Types.ObjectId | null;
  declare is_deleted: boolean; 

  constructor({
  
    firstName,
    lastName,
    age,
    email,
    password,
    photo,
    role,
    is_deleted
  }: {
 
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    password: string;
    photo: string;
    role: Types.ObjectId | null;
    is_deleted : boolean
  }) {
   
     this.firstName = firstName;
     this.lastName = lastName;
     this.age = age;
     this.email = email;
     this.password = password;
     this.photo = photo;
     this.role = role;
     this.is_deleted = is_deleted;
  }
}
