const express = require("express")
const app = express()

app.get("/", ()=> {
    console.log("yeah received a request, im cool")
})

app.listen(80)