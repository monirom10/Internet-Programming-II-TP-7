const express = require("express");
const fs = require("fs");
const app = express();

app.get("/ex2", function(request, response){
    fs.readFile("index.html", "utf8", (err, data)=>{
        if(err){
            console.error(err);
            return response.send("Server error.")
        }
        response.send(data);
    })
})

app.listen(3000, function(){
    console.log("Server start at port 3000");
})