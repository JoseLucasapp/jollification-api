import { UserMongoRepository } from "../../../database/implementations/IUserMongoRepository";
import { GetFriendController } from "./GetFriendController";
import { GetFriendsUseCase } from "./GetFriendsUseCase";

const repository = new UserMongoRepository()
const getFriendUseCase = new GetFriendsUseCase(repository)
const getFriendController = new GetFriendController(getFriendUseCase)

export { getFriendController, getFriendUseCase }