import { Router } from "express";
import userController from "../controller/users.js"


const router = Router();

router
      .post("/api/users",userController.POSTCRE)

export default router