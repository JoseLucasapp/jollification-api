import { UserMongoRepository } from "../../../database/implementations/IUserMongoRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const repository = new UserMongoRepository()
const createUserUseCase = new CreateUserUseCase(repository)
const createUserController = new CreateUserController(createUserUseCase)

export { createUserController, createUserUseCase }