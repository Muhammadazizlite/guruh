import express from "express"
const PORT =4000
const server =express()
server.use(express.json())

server.listen(PORT,()=>console.log("Server "+ PORT+ " portda ishlamoqda"))