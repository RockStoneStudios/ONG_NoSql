import { IMember } from "../domain/memberEntity";
import { MemberValue } from "../domain/memberValue";
import {IMemberRepository} from '../domain/IMemberRepository';


export class MemberUseCase {
    constructor (private readonly useCase : IMemberRepository){}

    public getAllMembers = async () => {
        const members = await this.useCase.getAllMembers();
        return members; 
    }

    public getMemberById = async (id:string) => {
        const member = await this.useCase.getMemberById(id);
        return member;
    }
    public createMemeber = async ({name,facebookUrl,instagramUrl,linkedinUrl,image,description}:
        {name:string,facebookUrl:string|null,instagramUrl:string|null,linkedinUrl:string|null,image:string|null,description:string|null}
        ) => {
              const newMember = new MemberValue({name,facebookUrl,instagramUrl,linkedinUrl,image,description});
              const member = await this.useCase.createMember(newMember);
              return member;
        }
    public deleteMember = async (id:string) => {
         const member = await this.useCase.deleteMember(id);
         return member;
    }
     public updateMember = async (id:string,{name,facebookUrl,instagramUrl,linkedinUrl,image,description}: {
        name:string,facebookUrl:string|null,instagramUrl:string|null,linkedinUrl:string|null,image:string|null,description:string|null
     })  => {
         const updateMember = new MemberValue({name,facebookUrl,instagramUrl,linkedinUrl,image,description});
         const member = await this.useCase.updateMember(id,updateMember);
         return member;
     }
}