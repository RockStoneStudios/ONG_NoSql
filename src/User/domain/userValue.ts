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
  declare roleId: Types.ObjectId | null;
  declare is_deleted: boolean; 

  constructor({
    id,
    firstName,
    lastName,
    age,
    email,
    password,
    photo,
    roleId,
    is_deleted
  }: {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    password: string;
    photo: string;
    roleId: Types.ObjectId | null;
    is_deleted : boolean
  }) {
     this.id = id;
     this.firstName = firstName;
     this.lastName = lastName;
     this.age = age;
     this.email = email;
     this.password = password;
     this.photo;
     this.roleId = roleId;
     this.is_deleted = is_deleted;
  }
}
