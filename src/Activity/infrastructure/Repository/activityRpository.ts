import {IActivityRepository} from '../../domain/IActivityRepository';
import { IActivity } from '../../domain/activityEntity';
import Activity from '../model/Activity';

export class MongoRepository implements IActivityRepository{
    async getAllActivity(): Promise<IActivity[] | null> {
        const activities = await Activity.find();
        return activities;
    }
}