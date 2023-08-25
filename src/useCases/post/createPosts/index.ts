import { IPostMongoRepository } from "../../../database/implementations/IPostMongoRepository";
import { CreatePostsController } from "./CreatePostsController";
import { CreatePostsUseCase } from "./CreatePostsUseCase";

const repository = new IPostMongoRepository()
const createPostsUseCase = new CreatePostsUseCase(repository)
const createPostsController = new CreatePostsController(createPostsUseCase)

export { createPostsController, createPostsUseCase }