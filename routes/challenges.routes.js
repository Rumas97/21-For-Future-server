const express = require("express")
const router = express.Router()
const ChallengeModel = require("../models/Challenge.model")


//We want to display all the challenges that belong to one category. For example: "Food"
router.get("/challenges/:category", (req,res)=>{

  const {category} = req.params
  //console.log(category)

  ChallengeModel.find({category})
    .then((response)=>{
      console.log(response)
      res.status(200).json(response)
    })

    .catch((err)=>{
      res.status(500).json({
        error: "Categories not found",
        message: err
      })
    })


})

router.get("/challenges/:category/:id", (req,res)=>{

  const {id} = req.params 
  
  ChallengeModel.findById(id)
    .then((response)=>{
      res.status(200).json(response)
    })

    .catch((err)=>{
      res.status(500).json({
        error: "Challenge ID not found",
        message: err
      })
    })


})



module.exports = router