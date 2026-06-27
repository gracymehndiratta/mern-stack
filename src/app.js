const express = require("express");
const app = express();
/*notes , description */
/* POST /notes */
const notes = []

app.post("/notes", (req, res) => {
    console.log(req.body)


})

module.exports=app;
