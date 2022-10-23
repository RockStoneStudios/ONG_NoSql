import {IActivity} from './activityEntity';

export class ActivityValues implements IActivity{
    declare id:string;
    declare name: string;
    declare content: string;
    declare image: string;
    declare is_deleted: boolean;

    constructor({name,content,image}:{name:string,content:string,image:string}){
        this.name = name;
        this.content = content;
        this.image = image;
        this.is_deleted= false;
    }
}