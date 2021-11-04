const e = require('express');
const express = require('express');
const app = express();
const path = require('path');
// console.log(__dirname); //return the complete path of the variable


// ------------tell express that we are going to use jade ----------//
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// -------------------------------------------------------  //

app.set("view engine", "jade");
app.use('/', (req, res) => {
    //middleware

    // res.sendFile(path.join(__dirname, "public/Hello.txt"), 'test.txt')   //we sent any file in the sentfile function

    // res.download(path.join(__dirname, "public/hello.json"), "hello.json")

    // res.render('index', { title: "Express" })


    // to set cookies

    res
        .status(201)
        .cookie("token", "test", {
            expire: new Date(Date.now() + 8 * 3600000)
        })
        .cookie("hello", "hello")
        .redirect(301, "/admin")


})

app.listen(5000);