import { UserMongoRepository } from "../../../database/implementations/IUserMongoRepository";
import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

const repository = new UserMongoRepository()
const deleteUserUseCase = new DeleteUserUseCase(repository)
const deleteUserController = new DeleteUserController(deleteUserUseCase)

export { deleteUserController, deleteUserUseCase }