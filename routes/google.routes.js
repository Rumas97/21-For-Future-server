const express = require("express")
const router = express.Router()
const UserModel = require("../models/User.model")



router.post("/google/info", (req, res, next) => {
  const {email,googleId} = req.body
  // the name itself will include the last name
  try {
    UserModel.find({email})
    .then((result)=>{
      if(result.length == 0){
        UserModel.create({email, googleId})
        .then((response) => {
          // Save the loggedInInfo in the session
          req.session.loggedInUser = response
          res.status(200).json({data: response})
        })
      }
      else{
        req.session.loggedInUser = result[0]
        res.status(200).json({data: result[0]})
      }
    })
    .catch(()=>{
      console.log("email not found")
    })
  }
  catch(error) {
    res.status(500).json({error: `${error}`})
  }
})

module.exports = router