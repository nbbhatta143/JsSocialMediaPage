const express = require("express");
const app = express();
const router = require("./router");

app.set("views", "views");
app.set("view engine", "ejs");
//accept traditional html input
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static("public"));
app.use("/", router);

module.exports = app;
