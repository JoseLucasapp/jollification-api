import { Request, Response } from "express";
import { GetFriendsUseCase } from "./GetFriendsUseCase";

export class GetFriendController {
    constructor(private getFriendUseCase: GetFriendsUseCase) { }

    async handle(req: Request, res: Response) {
        try {
            const data = await this.getFriendUseCase.execute(req.params.userId)

            res.status(200).json(data)
        } catch (error) {
            res.status(400).json({ msg: error })
        }
    }
}