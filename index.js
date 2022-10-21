const path = require('path');
const express = require("express")
const app = express()

app.get("/", (res,req)=> {
    res.sendFile('./index.html');   
})

app.listen(80)