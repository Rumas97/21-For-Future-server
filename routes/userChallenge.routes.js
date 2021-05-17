const express = require("express")
const router = express.Router()
const UserChallengeModel = require("../models/UserChallenge.model")

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

  UserChallengeModel.create({userId, challengeId})
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

router.get("/user-challenge/all-challenges", isLoggedIn, (req, res)=>{

  const {_id} = req.session.loggedInUser
  //let _id = "609f923dc7eedc4d6c241474"
  UserChallengeModel.find({userId: _id})
    .populate("challengeId")
    .then((response)=>{
      res.status(200).json(response)
      //We need to try to send only the name, for performance reasons. Now we send everything
      console.log(response)
    })

    .catch(()=>{

    })


})

router.patch("/user-challenge/:id", (req, res)=>{

  const {id} = req.params 
  const {dayTracker} = req.body 
  
  UserChallengeModel.findByIdAndUpdate(id, {$addToSet: {dayTracker}}, {new: true})
    .then((response)=>{
      res.status(200).json(response)

    })

    .catch(()=>{
      res.status(500).json({
        error: "track number not working",
        message: err
      })
    })
})





//THIS ONE IS FOR DISPLAY THE USER CHALLENGE THAT HE IS CURRENTLY DOING
router.get("/user-challenge/:id", isLoggedIn, (req,res)=>{

  const {id} = req.params

  UserChallengeModel.findById(id)
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