import { IUserRepository } from "../../domain/IUserRepository";
import User from "../model/user";
import Role from '../../../Role/infrastructure/model/role';
import { IUser } from "../../domain/userEntity";
import { IRole } from "../../../Role/domain/roleEntity";



export class MongoRepository implements IUserRepository{

    async getAllUser(): Promise<IUser[]|null> {
        const users = await User.find({}).populate({path : 'role'})
        console.log(users);
        return users;
    }
    async getUserById(id: string): Promise<IUser | null> {
        const user = await User.findById(id);
        return user;
    }

    async registerUser(user: IUser): Promise<IUser | null> {
        const newUser = new User(user);
        const role = await Role.findById(newUser.role);
        newUser.role = role?._id;
        await newUser.save();
        role?.users?.push(newUser._id);
        await role?.save();
        return newUser;
    }
    async updatedUser(id: string, user: IUser): Promise<IUser | null> {
        const updatedUser = await User.findByIdAndUpdate(id,user,{new : true});
        return updatedUser;
    }

    async deletedUser(id: string): Promise<IUser |null> {
        const user = await User.findById(id);
         if(user){
             user.is_deleted = true;
             await user.save();
         }
        return user;
    }
    async getUserByEmail(email: string): Promise<IUser|null> {
        const user = await User.findOne({email : email});
        return user;
    }

    async loginUser(email: string, password: string): Promise<IUser|null> {
        const user = await User.findOne({email:email});
        return user;
    }
}
