import { Types } from "mongoose";

export interface ICategory {
    name : string;
    description:string;
    image? : string|null,
    news : Types.ObjectId[] | null
}