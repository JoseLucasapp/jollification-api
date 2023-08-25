import { UserEntitie } from "../entities/User"

export interface IUserRepository {
    save(data: UserEntitie): Promise<void>;
    find(query: any): Promise<Object>;
    findAll(query: any): Promise<UserEntitie[]>;
    findById(id: string): Promise<UserEntitie | null>;
    editUser(id: string, data: UserEntitie): Promise<void>;
    deleteUser(id: string): Promise<void>;
    addFriend(id: string, friendId: string): Promise<void>;
}