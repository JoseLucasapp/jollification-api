import { UserEntitie } from "../../../entities/User";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { ICreateUserDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    constructor(private userRepository: IUserRepository) { }

    async execute(data: ICreateUserDTO) {

        const user = new UserEntitie(data)

        const checkUser = await this.userRepository.findAll({ username: user.username })
        if (checkUser.length > 0) {
            return 'User already exists'
        }

        await this.userRepository.save(user)
    }
}