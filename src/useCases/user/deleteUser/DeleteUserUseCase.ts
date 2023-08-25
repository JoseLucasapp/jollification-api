import { IUserRepository } from "../../../repositories/IUserRepository";

export class DeleteUserUseCase {
    constructor(private userRepository: IUserRepository) { }

    async execute(userId: string) {
        await this.userRepository.deleteUser(userId)
    }
}