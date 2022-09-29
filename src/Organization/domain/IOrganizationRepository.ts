import { IOrganization } from "./organizationEntity";
import { OrganizationValue } from "./organizationValues";

export interface IOrganizationRepository {
     getAllOrganization () : Promise<IOrganization[]|null>;
     getOrganizationById (id:string):Promise<IOrganization|null>;
     createOrganization (organization:IOrganization) :Promise<IOrganization|null>;
     deleteOrganization (id:string) :Promise<IOrganization|null>;
     updateOrganization (id:string,organization:IOrganization) : Promise<IOrganization|null>

}