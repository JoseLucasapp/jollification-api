import { NextFunction, Request, Response, Router } from "express";
import { createPostsController } from "../useCases/post/createPosts";
import { validadeJwt } from "../middlewares/loginAuth";
import { getPostsController } from "../useCases/post/getPosts";

export default (router: Router) => {
    router.post('/post', [(req: Request, res: Response, next: NextFunction) => validadeJwt(req, res, next)], (req: Request, res: Response) => {
        return createPostsController.handle(req, res)
    })
    router.get('/post', [(req: Request, res: Response, next: NextFunction) => validadeJwt(req, res, next)], (req: Request, res: Response) => {
        return getPostsController.handle(req, res)
    })

}