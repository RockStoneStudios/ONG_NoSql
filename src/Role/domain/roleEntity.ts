import {Types} from 'mongoose'

export interface IRole  { 
    name :string;
    description : string;
    users? :  Types.ObjectId[] |null;

}