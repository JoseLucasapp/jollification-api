import { PostEntitie } from "../../../entities/Post";
import { IPostRepository } from "../../../repositories/IPostRepository";
import { ICreatePostsRequestsDTO } from "./CreatePostsDTO";

export class CreatePostsUseCase {
    constructor(private postsRepository: IPostRepository) { }

    async execute(data: ICreatePostsRequestsDTO) {
        const post = new PostEntitie(data)

        const newPost = this.postsRepository.save(post)

        return newPost
    }
}