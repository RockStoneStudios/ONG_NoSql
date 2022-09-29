import {Request,Response} from 'express';
import {MemberUseCase} from '../../application/memberUseCase';
import { IMember } from '../../domain/memberEntity';


export class MemberController {
    constructor (private memberCase: MemberUseCase){}

    public getAllMembers = async (req:Request,res:Response) : Promise<IMember[]|Response> => {
        try{
             const members = await this.memberCase.getAllMembers();
             return res.status(200).json(members);
        }catch(error){
            return res.status(500).json(error);
        }
    }

    public getMemberById = async (req:Request,res:Response):Promise<IMember|Response> => {
        try{
             const member = await this.memberCase.getMemberById(req.params.id);
             return res.status(200).json(member);

        }catch(error){
            return res.status(500).json(error);
        }
    }

    public createMember = async (req:Request,res:Response) :Promise<IMember|Response> => {
         try{
            const member = await this.memberCase.createMemeber(req.body);
            return res.status(201).json({message : `The Member ${member?.name} has been created Successful`});
         }catch(error){
            return res.status(500).json(error)
         }
    }

    public deleteMember = async (req:Request,res:Response) : Promise<IMember|Response> => {
        try{
           const member = await this.memberCase.deleteMember(req.params.id);
           return res.status(200).json({message : `The Member ${member?.name} has been deleted Successful`});
        }catch(error){
            return res.status(500).json(error);
        }
    }

    public updateMember = async (req:Request,res:Response) : Promise<IMember|Response> => {
        try{
            const member = await this.memberCase.updateMember(req.params.id,req.body);
             return res.status(200).json(member);
        }catch(error){
            return res.status(500).json(error);
        }
    }
}
