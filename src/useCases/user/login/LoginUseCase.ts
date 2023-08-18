import { UserEntitie } from "../../../entities/User"
import { generateToken } from "../../../helpers/jwt"
import { createHash } from "../../../helpers/utils"
import { IUserRepository } from "../../../repositories/IUserRepository"

export class LoginUseCase {
    constructor(private userRepository: IUserRepository) { }

    async execute(data: UserEntitie) {
        const pass = await createHash(data.password)
        const user = await this.userRepository.findAll({ username: data.username, password: pass })

        if (user.length <= 0) {
            const userPass = await this.userRepository.find({ username: data.username })
            if (userPass) {
                return 'Incorrect password'
            }
            return 'Not found'
        }

        const token = await generateToken({
            _id: user[0]['_id'],
            username: user[0].username,
        })

        return { user, token }
    }
}