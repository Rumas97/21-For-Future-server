const express = require("express")
const router = express.Router()
const userChallengeModel = require("../models/UserChallenge.model")

//Middleware to protect the routes
const isLoggedIn = (req, res, next) => {  
  console.log("the login user")
  console.log(req.session)
  if (req.session.loggedInUser) {
      //calls whatever is to be executed after the isLoggedIn function is over
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

  //console.log(`FUCKING ERROR`)
  //console.log(req.session.loggedInUser)

  //the userId will come from the sessions.
  const userId = req.session.loggedInUser._id //THE ERROR OF THE 500 END'S UP HERE, IT DOESNT KNOW WHICH USER IS LOGGED IN
  //console.log(`We are here ` + userId)
  const {challengeId} = req.params

  userChallengeModel.create({userId, challengeId})
    .then((response)=>{
      //console.log(response)
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
  console.log('are we here?')
  console.log(req.params)
  console.log(req.sessions)
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