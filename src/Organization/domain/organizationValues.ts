import { Types } from 'mongoose';
import {IOrganization} from './organizationEntity';

export class OrganizationValue implements IOrganization {
    declare name: string;
    declare image: string;
    declare address: string |null;
    declare phone: number | null;
    declare email: string;
    declare welcomeText: String;
    declare aboutUsText: string | null;
    declare delete_at: Date|null;
    declare slide: Types.ObjectId | null;

    constructor({name,image,address,phone,email,welcomeText,aboutUsText,slide,delete_at}:
    {
        name:string,image : string,address:string|null,phone:number|null,email:string,welcomeText:string,
        aboutUsText:string|null,slide:Types.ObjectId|null,delete_at:Date|null
    }) {
        this.name = name;
        this.image = image;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.welcomeText = welcomeText;
        this.aboutUsText = aboutUsText;
        this.slide = slide;
        this.delete_at = delete_at;

    }
}