const express = require('express');
const router = express.Router();
const User = require("../models/users");
const multer = require("multer");
const fs = require("fs");

//for uploadng image
var storage = multer.diskStorage({
    destination: function(req, file, cb){
       cb(null, "./uploads")
    },
    filename: function(req, file, cb){
       cb(null, file.fieldname+"_"+Date.now()+"_"+file.originalname);
    },
});

var upload = multer({
    storage: storage,
}).single("image");//the name image is written here because in add_users file the div which acquires image has the name value as image. 

router.post("/add", upload, (req,res)=>{
    const user = new User({
       name: req.body.name,
       email: req.body.email,
       phone: req.body.phone,
       image: req.file.filename,
    });
    async function saveUser(req, res) {
        try {
          await user.save();
          req.session.message = {
            type: "success",
            message: "User added successfully!",
          };
          res.redirect("/"); 
        } catch (err) {
          res.json({
            message: err.message,
            type: 'danger',
          });
        }
      }
      
      saveUser(req, res);
      
});

router.get("/",(req,res)=>{
    User.find().exec()
    .then(users => {
      res.render("index", {
        title: "Home Page",
        users: users, 
      });
    })
    .catch(err => {
      res.json({ message: err.message });
    });
});

router.get("/add",(req,res)=>{
    res.render("add_users", {title: "Add Users"});
});


router.get("/edit/:id", (req, res) => {
  const id = req.params.id;
  
  User.findById(id)
    .then(user => {
      if (!user) {
        return res.redirect("/");  
      }

      res.render("edit_users", {
        title: "Edit User",
        user: user,
      });
    })
    .catch(err => {
      res.redirect("/");  
    });
});

//for updating
router.post("/update/:id", upload, (req, res) => {
  let id = req.params.id;
  let new_image = "";

  if (req.file) {
    new_image = req.file.filename;

    try {
      fs.unlinkSync("./uploads/" + req.body.old_image);
    } catch (err) {
      console.log(err);
    }
  } else {
    new_image = req.body.old_image;
  }

  User.findByIdAndUpdate(id, {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    image: new_image,
  }, { new: true })
    .then(result => {
      if (!result) {
        return res.status(404).json({ message: 'User not found', type: 'danger' });
      }

      req.session.message = {
        type: 'success',
        message: 'User updated successfully',
      };

      res.redirect('/');
    })
    .catch(err => {
      res.json({ message: err.message, type: 'danger' });
    });
});

//for deleting user
router.get("/delete/:id", (req, res) => {
  let id = req.params.id;

  User.findByIdAndDelete(id)
    .then(result => {
      if (result && result.image !== '') {
        try {
          fs.unlinkSync("./uploads/" + result.image);
        } catch (err) {
          console.log(err);
        }
      }

      req.session.message = {
        type: "info",
        message: "User deleted successfully"
      };
      res.redirect("/");

    })
    .catch(err => {
      res.json({ message: err.message });
    });
});


module.exports = router;