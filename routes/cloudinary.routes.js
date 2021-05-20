const express = require('express')
const router  = express.Router()
const UserModel= require("../models/User.model")
const uploader = require('../config/cloudinary.config.js')

router.post('/upload', uploader.single("imageUrl"), (req, res, next) => {

    if (!req.file) {
      next(new Error('No file uploaded!'))
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

module.exports = router