import { Router } from "express";
import userController from "../controller/users.js"


const router = Router();

router
      .get("api/users",userController.GET)
      .post("api/users",userController.POSTCRE)

export default router