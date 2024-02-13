const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const { PORT, DB_URL } = require("./constants");
const router = require("./routes");
const mongoose = require("mongoose");

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
    .catch (err => console.log(`Error while connecting Database, Error: ${err}`));

// Configure routes
app.use(router);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));