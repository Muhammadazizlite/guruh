import fs from "fs"
let baza =JSON.parse(fs.readFileSync("./src/database/users.json","utf-8"))
function POSTLOGIN(req,res){
      const {name,age}=req.body
      res.send(JSON.stringify(baza))
}
function POSTREG(req,res){
      res.send("salom 04")
}
function POSTCRE(req,res){
      const {email,password}=req.body
      try{
            if(!email){
                  throw Error("Invalid email")
            }
            if(!password){
                  throw Error("Invalid paswword")
            }
            const newbaby={
                  id:baza.length ? baza.at(-1).id+1:1,
                  email,
                  password
            }
            baza.push(newbaby)
            fs.writeFileSync("./src/database/users.json",JSON.stringify(baza,null,4))
            res.status(201)
            res.send(JSON.stringify({token:`${newbaby.email}`}))
      }
      catch(error){
            res.status(400)
            res.send(error.message)
      }
}

export default {
      POSTCRE
}