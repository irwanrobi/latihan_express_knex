const express = require('express');
const hbs = require('express-handlebars');
const cors = require('cors');
const path = require('path');

const app = express();

// Panggil Controller
const HomeController = require("./Controllers/HomeController");

// middleware
app.use(cors());
app.use(express.static(path.join(__dirname, "Public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// setup view engine
app.set("views", path.join(__dirname, "Views"));
app.set("view engine", "html");
app.engine("html", hbs({
        layoutsDir: path.join(__dirname, "Views/Layouts"),
        partialsDir: path.join(__dirname, "Views/Components"),
        defaultLayout: "main_layout.html",
        extname: "html"
    })
);

// Routing
app.use("/", HomeController);

// listener untuk jalankan server
app.listen(3000, ()=> {
    console.log("Server berhasil dijalankan pada port 3000")
})