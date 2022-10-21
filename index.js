const express = require("express")
const app = express()

app.get("/", (res,req)=> {
    console.log("yeah received a request, im cool")
})

app.listen(8000)