import { IPostMongoRepository } from "../../../database/implementations/IPostMongoRepository";
import { GetPostsController } from "./GetPostsController";
import { GetPostsUseCase } from "./GetPostsUseCase";

const repository = new IPostMongoRepository()
const getPostsUseCase = new GetPostsUseCase(repository)
const getPostsController = new GetPostsController(getPostsUseCase)

export { getPostsController, getPostsUseCase }