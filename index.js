const express = require("express")
const app = express()

app.get("/", (res,req)=> {
    console.log("yeah received a request, im cool")
    req.render("hello")
})

app.listen(80)