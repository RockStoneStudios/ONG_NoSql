import { Types } from 'mongoose';
import {IOrganizationRepository} from '../domain/IOrganizationRepository';
import { IOrganization } from '../domain/organizationEntity';
import {OrganizationValue} from '../domain/organizationValues';

export class OrganizationUseCase {
    constructor (private readonly useCase:IOrganizationRepository){}

    public getAllOrganization = async () => {
        const organizations = await this.useCase.getAllOrganization();
        return organizations;
    }
    public getOrganizationById = async(id:string) => {
        const organization = await this.useCase.getOrganizationById(id);
        return organization;
    }

     public createOrganization = async ({name,image,address,phone,email,welcomeText,aboutUsText,slide,delete_at}:
        {name:string,image: string,address : string|null,phone : number|null,email:string,welcomeText:string,aboutUsText:string|null,slide:Types.ObjectId|null,delete_at:Date|null}  
      ) =>{
        const newOrganization = new OrganizationValue({name,image,address,phone,email,welcomeText,aboutUsText,slide,delete_at});
        const organization = this.useCase.createOrganization(newOrganization);
        return organization;
      }

    public deleteOrganization = async (id:string) => {
        const organization = await this.useCase.deleteOrganization(id);
        return organization;
    }
    public updateOrganization = async (id:string,organization:IOrganization) => {
        const updateOrganization = await this.useCase.updateOrganization(id,organization);
        return updateOrganization;
    }
}