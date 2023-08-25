import { Request, Response } from "express";
import { GetPostsUseCase } from "./GetPostsUseCase";

export class GetPostsController {
    constructor(private getPostsUseCase: GetPostsUseCase) { }

    async handle(req: Request, res: Response) {
        try {
            const data = await this.getPostsUseCase.execute(req.body.type, req.params.userId)
            res.status(200).json(data)
        } catch (error) {
            res.status(400).json({ msg: error })
        }
    }
}