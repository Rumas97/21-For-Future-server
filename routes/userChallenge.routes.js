const express = require("express")
const router = express.Router()
const userChallengeModel = require("../models/UserChallenge.model")

//Middleware to protect the routes
const isLoggedIn = (req, res, next) => {  
 
  if (req.session.loggedInUser) {
      next()
  }
  else {
      res.status(401).json({
          message: 'Unauthorized user',
          code: 401,
      })
  };
};


router.post("/user-challenge/start/:challengeId", isLoggedIn,  (req,res)=>{

  
  //the userId will come from the sessions.
  const userId = req.session.loggedInUser._id 
  const {challengeId} = req.params

  userChallengeModel.create({userId, challengeId})
    .then((response)=>{
     
      res.status(200).json(response)

    })

    .catch((err)=>{
      res.status(500).json({
        error: "Error while starting the challenge",
        message: err
      })  
    })
})


router.get("/user-challenge/:id", isLoggedIn, (req,res)=>{
  
  const {id} = req.params

  userChallengeModel.findById(id)
    .populate("userId challengeId") 
    .then((response)=>{
      res.status(200).json(response)
      
    })
    
    .catch((err)=>{
      res.status(500).json({
        error: "Error while getting back the user challenge",
        message: err
      })      
    })
})


module.exports = router