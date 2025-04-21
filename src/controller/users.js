import fs from "fs"
let baza =JSON.parse(fs.readFileSync("./controller/users.js","utf-8"))
function GET(req,res){
      res.send("Salom")
}
function POST(req,res){
      const {name,age}=req.body
      res.send("salom 2")
}
function POSTLOGIN(req,res){
      const {name,age}=req.body
      res.send(JSON.stringify(baza))
}
function POSTREG(req,res){
      res.send("salom 04")
}
function POSTCRE(req,res){
      res.send("salom 06")
}

export default {
      GET,
      POST,
      POSTLOGIN,
      POSTREG,
      POSTCRE
}