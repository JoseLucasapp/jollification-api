export interface ICreateUserDTO {
    username: string;
    password: string;
    friends_id?: string[];
    profile_pic?: string;
    is_private?: boolean;

}