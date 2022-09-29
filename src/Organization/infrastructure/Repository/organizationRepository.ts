import Organization from '../model/organization';
import { IOrganization } from '../../domain/organizationEntity';
import { IOrganizationRepository } from '../../domain/IOrganizationRepository';



export class MongoRepository implements IOrganizationRepository {
     async getAllOrganization(): Promise<IOrganization []| null> {
          const organizations = await Organization.find();
          return organizations;
     }
     async getOrganizationById(id: string): Promise<IOrganization | null> {
         const organization = await Organization.findById(id);
         return organization;
     }

     async createOrganization(organization: IOrganization): Promise<IOrganization | null> {
          const newOrganization = new Organization(organization);
          await newOrganization.save();
          return newOrganization;
     }
     async deleteOrganization(id: string): Promise<IOrganization | null> {
         const organization = await Organization.findByIdAndDelete(id);
         return organization;
     }
     async updateOrganization(id: string, organization: IOrganization): Promise<IOrganization | null> {
         const upDateOrganization = await Organization.findByIdAndUpdate(id,organization,{new : true});
         return upDateOrganization;
     }
}