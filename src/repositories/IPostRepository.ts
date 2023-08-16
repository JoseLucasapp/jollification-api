import { PostEntitie } from "../entities/Post"

export interface IPostRepository {
    save(data: PostEntitie): Promise<void>;
    find(query: any): Promise<PostEntitie[]>;
    findById(id: string): Promise<PostEntitie | null>;
    deletePost(id: string): Promise<void>;
}