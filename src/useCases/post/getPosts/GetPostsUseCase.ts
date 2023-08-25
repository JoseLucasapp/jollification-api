import { IPostRepository } from "../../../repositories/IPostRepository";

export class GetPostsUseCase {
    constructor(private postRepository: IPostRepository) { }

    async execute(type: string, userId: string) {
        const posts = await this.postRepository.find({ type: type, userId: userId })
        return posts
    }
}