const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");

// Local Variabels
const app = express();

//Express Configuration
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.resolve(__dirname, "../public")));

//Handlebars Configuration
app.engine("hbs", handlebars.engine({extname: "hbs"}));
app.set("view engine", "hbs");
app.set("views", "src/views");