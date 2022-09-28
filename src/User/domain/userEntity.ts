import {Types} from 'mongoose'
export interface IUser {
    id : string;
    firstName:string;
    lastName :string;
    age : number;
    email:string;
    password:string;
    photo : null|string;
    role? : Types.ObjectId | null;
    is_deleted : boolean
}