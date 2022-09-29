import { IMember } from "./memberEntity";

export class MemberValue implements IMember {
    declare name: string;
    declare facebookUrl?: string | null | undefined;
    declare instagramUrl?: string | null | undefined;
    declare linkedinUrl?: string | null | undefined;
    declare image?: string | null | undefined;
    declare description?: string | null | undefined;

    constructor({name,facebookUrl,instagramUrl,linkedinUrl,image,description}:
     {name: string,facebookUrl:string|null,instagramUrl:string|null,linkedinUrl:string|null,image:string|null,description:string|null}    
    ){
        this.name = name;
        this.facebookUrl = facebookUrl;
        this.instagramUrl = instagramUrl;
        this.linkedinUrl = linkedinUrl;
        this.image = image;
        this.description = description;
    }

}