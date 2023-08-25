import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

export class DeleteUserController {
    constructor(private deleteUserUseCase: DeleteUserUseCase) { }

    async handle(req: Request, res: Response) {
        try {
            await this.deleteUserUseCase.execute(req.params.userId)
            res.status(200).json({ msg: 'Deleted' })
        } catch (error) {
            res.status(400).json({ msg: error })
        }
    }
}