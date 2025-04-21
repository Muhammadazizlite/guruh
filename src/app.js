import express from "express"
import userRouter from "./router/users.js"
const PORT =4000
const server =express()
server.use(express.json())
server.use(userRouter)

server.listen(PORT,()=>console.log("Server "+ PORT+ " portda ishlamoqda"))