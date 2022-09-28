import Role from '../model/role';
import { IRole } from '../../domain/roleEntity';
import { IRoleRepository } from '../../domain/IRoleRepository';
import { IUser } from '../../../User/domain/userEntity';


export class MongoRepository implements IRoleRepository {

    async getAllRole(): Promise<IRole[] | null> {
        const roles = await Role.find().populate<{user: IUser}>('users').orFail();
        console.log(roles);
        
        return roles;
    }
    async createRole(role: IRole): Promise<IRole | null> {
        const rol = new Role(role);
        await rol.save();
        return rol;
    }
    async getRoleById(id: string): Promise<IRole | null> {
        const role = await Role.findById(id);
        return role;
    }
    async deleteRole(id: string): Promise<IRole | null> {
        const role = await Role.findByIdAndDelete(id);
        return role;
    }
    async updatedRole(id: string, role: IRole): Promise<IRole | null> {
         const updateRole = await Role.findByIdAndUpdate(id,role,{new : true});
         return updateRole;
    }
}

