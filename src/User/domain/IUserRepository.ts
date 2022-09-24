import { IUser} from "./userEntity";

export interface IUserRepository {
    getAllUser() : Promise<IUser[]|null>;
    registerUser(user:IUser):Promise<IUser|null>;
    getUserById(id:string):Promise<IUser|null>;
    updatedUser(id:string,user:IUser):Promise<IUser|null>;
    deletedUser(id:string) : Promise<IUser|null>;
    getUserByEmail(email:string) :Promise<IUser|null>;
    loginUser(email:string,password:string) :Promise<IUser|null>;
    

}