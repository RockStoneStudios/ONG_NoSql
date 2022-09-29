import { IMemberRepository } from "../../domain/IMemberRepository";
import { IMember } from "../../domain/memberEntity";
import Member from "../model/member";

export class MongoRepository implements IMemberRepository {

     async getAllMembers(): Promise<IMember[] | null> {
          const members = await Member.find();
          return members;
     }
     async getMemberById(id: string): Promise<IMember | null> {
         const member = await Member.findById(id);
         return member;
     }

     async createMember(member: IMember): Promise<IMember | null> {
         const newMember = new Member(member);
         await newMember.save();
         return newMember; 
     }

     async deleteMember(id: string): Promise<IMember | null> {
          const member = await Member.findByIdAndDelete(id);
          return member;
     }

     async updateMember(id: string, member: IMember): Promise<IMember | null> {
         const updateMember = await Member.findByIdAndUpdate(id,member,{new : true});
         return updateMember;
     }
}