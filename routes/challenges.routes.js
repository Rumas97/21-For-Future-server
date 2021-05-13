const express = require("express")
const router = express.Router()
const ChallengeModel = require("../models/Challenge.model")


router.get("/challenges/:category", ()=>{

  const {category} = req.params

  ChallengeModel.find({category})
    .then((response)=>{
      res.status(200).json(response)
    })

    .catch((err)=>{
      res.status(500).json({
        error: "Categories not found",
        message: err
      })
    })


})



module.exports = router