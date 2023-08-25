import { Request, Response } from "express";
import { CreatePostsUseCase } from "./CreatePostsUseCase";

export class CreatePostsController {
    constructor(private postsUseCase: CreatePostsUseCase) { }

    async handle(req: Request, res: Response) {
        try {
            const newPost = await this.postsUseCase.execute(req.body)
            res.status(200).json({ msg: newPost })
        } catch (error) {
            res.status(400).json({ msg: error })
        }
    }
}