import { Request, Response } from "express";
import { LoginUseCase } from "./LoginUseCase";

export class LoginController {
    constructor(private loginUseCase: LoginUseCase) { }

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const user = await this.loginUseCase.execute(req.body)
            if (user == 'Incorrect password') return res.status(400).json({ msg: user })
            if (user == 'Not found') return res.status(404).json({ msg: user })
            return res.status(200).json(user)
        } catch (error) {
            return res.status(500).json({
                message: error || 'Unexpected error'
            })
        }
    }
}