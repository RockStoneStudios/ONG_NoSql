import {IOrganization} from '../../domain/organizationEntity';
import {OrganizationUseCase} from '../../application/organizationUseCase';
import { Request,Response } from 'express';

export class OrganizationController {
     constructor (private organizationCase : OrganizationUseCase){}

     public getAllOrganizations = async (req:Request,res:Response) : Promise<IOrganization|Response> => {
        try{
            const organizations = await this.organizationCase.getAllOrganization();
            return res.status(200).json(organizations);
        }catch(error){
            return res.status(500).json(error);
        }
     }

     public createOrganization = async (req:Request,res:Response):Promise<IOrganization|Response> => {
        try{
            const organization = await this.organizationCase.createOrganization(req.body);
            return res.status(201).json({message : `the Organization ${organization?.name} has been Created Successful`});
        }catch(error){
            return res.status(500).json(error);
        }
     }

     public getOrganizationById = async (req:Request,res:Response) :Promise<IOrganization|Response> => {
        try{
            const organization = await this.organizationCase.getOrganizationById(req.params.id);
            return res.status(200).json(organization);
        }catch(error){
            return res.status(500).json(error);
        }
     }

     public deleteOrganization = async (req:Request,res:Response):Promise<IOrganization|Response> => {
        try{
            const organization = await this.organizationCase.deleteOrganization(req.params.id);
            return res.status(200).json({message : `The Organization ${organization?.name} has been deleted Successful`});
        }catch(error){
            return res.status(500).json(error);
        }
     }

     public updateOrganization = async (req:Request,res:Response):Promise<IOrganization|Response> => {
          try{
            const organization = await this.organizationCase.updateOrganization(req.params.id,req.body);
            return res.status(200).json({message : `The Organization ${organization?.name} has been updated Successful`})
          }catch(error){
            return res.status(200).json(error);
          }
     }

     
}