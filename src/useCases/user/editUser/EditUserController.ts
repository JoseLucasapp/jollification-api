import { Request, Response } from "express";
import { EditUserUseCase } from "./EditUserUseCase";

export class EditUserController {
    constructor(private editUserUseCase: EditUserUseCase) { }

    async handle(req: Request, res: Response) {
        try {
            const editUser = await this.editUserUseCase.execute(req.params.userId, req.body)
            res.status(200).json({ msg: editUser })
        } catch (error) {
            res.status(400).json({ msg: error })
        }
    }
}