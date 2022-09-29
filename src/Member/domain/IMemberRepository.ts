import { IMember } from "./memberEntity";


export interface IMemberRepository {
     getAllMembers () : Promise <IMember[]|null>;
     getMemberById (id:string) : Promise<IMember|null>;
     createMember (member:IMember) : Promise<IMember|null>;
     deleteMember (id:string) :Promise<IMember|null>;
     updateMember (id: string,member:IMember) : Promise<IMember|null>;

}