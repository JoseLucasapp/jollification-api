import { IUserRepository } from "../../../repositories/IUserRepository";

export class GetFriendsUseCase {
    constructor(private userRepository: IUserRepository) { }

    async execute(userId: string) {
        const friends = await this.userRepository.findAll({ friendOf: userId })

        return friends
    }
}