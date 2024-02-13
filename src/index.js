const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const { PORT, DB_URL } = require("./constants");
const router = require("./routes");
const mongoose = require("mongoose");
const { error } = require("console");

// Local Variabels
const app = express();

//Express Configuration
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.resolve(__dirname, "../public")));

//Handlebars Configuration
app.engine("hbs", handlebars.engine({extname: "hbs"}));
app.set("view engine", "hbs");
app.set("views", "src/views");

//Data base configuration
async function dbConnect() {
    await mongoose.connect(DB_URL);
}
dbConnect()
    .then(() => {
        console.log("Database connected successfully");
    })
    .catch (error => console.log(`Error while connecting Database, Error: ${error}`));

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));