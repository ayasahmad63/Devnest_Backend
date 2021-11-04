## Jade

> Installing Jade

```
npm i -s jade
```

## What is Jade ?

> It's html + variables

Jade is a template engine for Node.js. It uses whitespace and indentation as a part of the syntax.

[Jade Tutorial](https://www.tutorialsteacher.com/nodejs/jade-template-engine)

## Express - Generator

- provides boiler plate express-code

```
npx express-generator
npm install
SET DEBUG=<directory_name>:* & npm start
```

### res.sendfile :

sends file to front-end and it renders if it can be rendered by the browser

### res.download :

downloads the file

### res.render :

render the dynamic file with variable (used jade in current context)

# Code Samples :

```js
const express = require("express");
const app = express();
const path = require("path");

console.log(__dirname); // returns the complete path of dir

// ------ tell express that we are going to use jade ---------- //

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// ----------------------------- //

app.use("/", (req, res) => {
  // middleware

  // comment every command before starting the server
  // res.sendFile(path.join(__dirname, "public/Hello.txt"), "test.txt"); // sends it to frontend
  // res.download(path.join(__dirname, "public/Hello.txt"), "test.txt"); // downloads the file
  // res.render("index", { title: "Express + Jade" }); // renders index.jade with variable title
  //----------- set cookies -------------//
  res
    .status(201)
    .cookie("token", "test", {
      expires: new Date(Date.now() + 8 * 3600000), // expires in 8 hrs
    })
    .cookie("hello", "hello")
    .redirect(301, "/admin");
});

app.listen(5000);
```