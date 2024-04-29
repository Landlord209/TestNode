const express = require("express")
const dotenv = require("dotenv")
const bodyParser = require("body-parser");
const morganna = require("morgan")// this logs out messages
const path = require("path")





const app = express()


dotenv.config({path:"config.env"})

// port is written in capslock because i dont want it to be  tampered with
const PORT = process.env.PORT || 9000

app.use(bodyParser.urlencoded({extended:true}))
app.use(morganna("tiny"))

//this is used to handle the relative path so node can understand which file im trying to refer too
app.use("/css",express.static(path.resolve(__dirname,"./assets/css/style.css")))

app.set("view engine", "ejs")


app.get("/",(req,res)=>{
    return res.render("index.ejs")
})






// http://localhost:2022
app.listen(PORT,()=>{
    console.log("Server working at http://localhost:"+PORT);
})