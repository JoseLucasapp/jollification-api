import { UserEntitie } from "../../../entities/User";
import { IUserRepository } from "../../../repositories/IUserRepository";

export class EditUserUseCase {
    constructor(private userRepository: IUserRepository) {

    }

    async execute(id: string, data: UserEntitie) {
        try {
            await this.userRepository.editUser(id, data)
            return 'Updated'
        } catch (error) {
            return error
        }
    }
}