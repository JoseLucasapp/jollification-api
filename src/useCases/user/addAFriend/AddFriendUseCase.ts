import { IUserRepository } from "../../../repositories/IUserRepository";

export class AddFriendUseCase {
    constructor(private userRepository: IUserRepository) { }

    async execute(userId: string, friendId: string) {
        await this.userRepository.addFriend(userId, friendId)
    }
}