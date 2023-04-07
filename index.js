const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const app = express()
const User = require('./user');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'));

mongoose.connect('mongodb+srv://vikasyamsani021203:Vikas2003!@cluster0.axat5s3.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTION IS OK!")
    })
    .catch((er) => {
        console.log(er)
    })

const user = require("./user")

app.get("/", (req, res) => {
    res.render("index")
})

app.post("/submit-form", (req, res) => {
    const submit = req.body.action;
    if (submit == "Doctor") {
        res.render("doctor")
    }
    else if (submit == "isuser") {
        res.render("user")
    }
})

app.listen(3000, () => {
    console.log("LISTENING AT 3000!")
})
