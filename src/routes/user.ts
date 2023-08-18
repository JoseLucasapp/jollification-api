import { Request, Response, Router } from "express";
import { createUserController } from "../useCases/user/createUser";
import { loginController } from "../useCases/user/login";

export default (router: Router) => {
    router.post('/user', (req: Request, res: Response) => {
        return createUserController.handle(req, res)
    })
    router.post('/login', (req: Request, res: Response) => {
        return loginController.handle(req, res)
    })
}