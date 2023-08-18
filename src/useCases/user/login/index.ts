import { UserMongoRepository } from "../../../database/implementations/IUserMongoRepository";
import { LoginController } from "./LoginController";
import { LoginUseCase } from "./LoginUseCase";

const repository = new UserMongoRepository()
const loginUseCase = new LoginUseCase(repository)
const loginController = new LoginController(loginUseCase)

export { loginController, loginUseCase }