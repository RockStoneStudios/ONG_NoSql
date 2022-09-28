import {IRole} from './roleEntity';

export interface IRoleRepository {
    createRole (role:IRole) : Promise<IRole | null>;
    getAllRole () : Promise<IRole[]|null>;
    getRoleById (id:string) : Promise<IRole|null>;
    deleteRole (id:string) :Promise<IRole|null>;
    updatedRole (id:string,role:IRole) : Promise<IRole|null>;


}
