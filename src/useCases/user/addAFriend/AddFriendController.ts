import { Request, Response } from "express";
import { AddFriendUseCase } from "./AddFriendUseCase";

export class AddFriendController {
    constructor(private addFriendUseCase: AddFriendUseCase) { }

    async handle(req: Request, res: Response) {
        try {
            await this.addFriendUseCase.execute(req.params.userId, req.body.friendId)
            res.status(200).json({ msg: 'added' })
        } catch (error) {
            res.status(400).json({ msg: error })
        }
    }
}