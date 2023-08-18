import { Router } from "express";
import user from "./user";

const router = Router()
user(router)

export { router }