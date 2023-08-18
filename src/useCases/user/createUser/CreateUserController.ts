import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) { }

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const user = await this.createUserUseCase.execute(req.body)

            if (user === 'User already exists') return res.status(400).json({ message: user })

            return res.status(201).json({})
        } catch (error) {
            return res.status(400).json({
                message: error || 'Unexpected error'
            })
        }
    }
}