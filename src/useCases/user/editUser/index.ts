import { UserMongoRepository } from "../../../database/implementations/IUserMongoRepository";
import { EditUserController } from "./EditUserController";
import { EditUserUseCase } from "./EditUserUseCase";

const repository = new UserMongoRepository()

const editUserUseCase = new EditUserUseCase(repository)
const editUserController = new EditUserController(editUserUseCase)

export { editUserController, editUserUseCase }