import { Model } from "mongoose";

interface UserAttributes {
    id?: string;
    username: string;
    password: string;
    friends_id?: string[];
    profile_pic?: string;
    is_private?: boolean;
}

export class UserEntitie extends Model<UserAttributes>{
    [x: string]: any;
}