import { Model } from "mongoose";

interface PostAttributes {
    id?: string;
    post: string;
    user_id: string;
}

export class PostEntitie extends Model<PostAttributes>{
    [x: string]: any;
}