const express = require("express")
const router = express.Router()
const userChallengeModel = require("../models/UserChallenge.model")


router.post("/user-challenge/start/:challengeId", (req,res)=>{

  //the userId will come from the sessions.
  const userId = req.session.loggedInUser._id
  const {challengeId} = req.params

  userChallengeModel.create({userId, challengeId})
    .then((response)=>{
      console.log(response)
      res.status(200).json(response)

    })

    .catch((err)=>{
      res.status(500).json({
        error: "Error while starting the challenge",
        message: err
      })  
    })
})


router.get("/user-challenge/:id", (req,res)=>{
  
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