import {IActivity} from './activityEntity';


export interface IActivityRepository{
    getAllActivity():Promise<IActivity[]|null>;
    getActivityById(id:string):Promise<IActivity|null>;
    createActivity(activity:IActivity):Promise<IActivity|null>;
    updateActivity(id:string,activity:IActivity):Promise<IActivity|null>;
    deleteActivity(id:string):Promise<IActivity|null>
}