import {IActivityRepository} from '../domain/IActivityRepository';
import {ActivityValues} from '../domain/activityValues';
import {IActivity} from '../domain/activityEntity';

export class ActivityUseCase{
    constructor(private readonly useCase:IActivityRepository){}

    public getAllActivity = async() => {
        const activities = await this.useCase.getAllActivity();
        return activities;
    }
    public getActivityById = async(id:string)=>{
        const activity = await this.useCase.getActivityById(id);
        return activity;
    }
    public createActivity = async({name,content,image}:{name:string,content:string,image:string})=>{
         const newActivity = new ActivityValues({name,content,image});
         const activity = await this.useCase.createActivity(newActivity);
         return activity;
    }

    public updateActivity = async (id:string,activity:IActivity)=>{
         const updateActivity = new ActivityValues(activity);
         const activityUp = await this.useCase.updateActivity(id,activity);
         return activityUp;
    }

    public deleteActivity = async(id:string)=>{
        const activity = await this.useCase.deleteActivity(id);
        return activity;
    }
}