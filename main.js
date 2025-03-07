require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");

const app = express();
const PORT = 5000;

main()
.then(()=>{
    console.log("connection successfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/cruddb');

}

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(
    session({
    secret: "my secret key",
    saveUninitialized: true,
    resave: false,
}));

app.use((req,res,next)=>{
    res.locals.message = req.session.message;
    delete req.session.message;
    next();
});

app.use(express.static("uploads")); 

app.set("view engine", "ejs");

app.use("",require("./routes/routes"));

app.listen(PORT, ()=>{
    console.log(`server started at ${PORT}`);
});
