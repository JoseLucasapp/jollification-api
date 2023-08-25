import { UserMongoRepository } from "../../../database/implementations/IUserMongoRepository";
import { AddFriendController } from "./AddFriendController";
import { AddFriendUseCase } from "./AddFriendUseCase";

const repository = new UserMongoRepository()
const addFriendUseCase = new AddFriendUseCase(repository)
const addFriendController = new AddFriendController(addFriendUseCase)

export { addFriendController, addFriendUseCase }