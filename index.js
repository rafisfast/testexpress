const path = require('path');
const express = require("express")
const app = express()

app.get("/", (res,req)=> {
    res.sendfile(path.join(__dirname, '/index.html'));   
})

app.listen(80)