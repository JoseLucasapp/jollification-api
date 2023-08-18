import { Model } from "mongoose";

interface UserAttributes {
    id?: string;
    username: string;
    password: string;
    friends_id?: string[];
    profile_pic?: string;
    is_private?: boolean;
}

export class UserEntitie {
    private readonly _id!: string;
    public username!: string;
    public password!: string;
    public friends_id?: string[];
    public profile_pic?: string;
    public is_private?: boolean;

    get id() {
        return this._id
    }

    constructor(props: UserAttributes) {
        Object.assign(this, props)
    }
}