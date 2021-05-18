const express = require('express');
const router  = express.Router();
const UserModel= require("../models/User.model")

// include CLOUDINARY:
const uploader = require('../config/cloudinary.config.js');

// ensure you have an input type like this in your hbs file
/*
<form method="POST" action="/upload" enctype="multipart/form-data">
    <input type="file" name="imageUrl" accept="image/png, image/jpg">
    <button type="submit">Submit</button> 
</form>     
*/

// imageUrl is the input name in your hbs file


router.post('/upload', uploader.single("imageUrl"), (req, res, next) => {
     console.log('file is: ', req.file)
    if (!req.file) {
      next(new Error('No file uploaded!'));
      return;
    }
    const{_id}= req.session.loggedInUser
    const profilePic=req.file.path
    UserModel.findByIdAndUpdate(_id,{profilePic},{new:true})
    .then((response)=>{
      res.status(200).json(response)
    })
    .catch((err)=>{
      res.status(500).json({
        error:"picture not uploaded",
        message:err
      })
    })

})

module.exports = router;