var express = require("express");
var app = express();
app.use(express.static("public"));   //moi request client gui len se di vao public
app.set("view engine", "ejs");
app.set("views", "./views");
app.listen(3000);               //mo 1 port de client goi den


app.get("/", function (reg, res) {
    res.render("trangchu");
})