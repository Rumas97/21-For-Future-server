require("../db")
const mongoose = require("mongoose")
const challengesModel = require ("../models/Challenge.model")

const lifeStyleChallenges = [
  {
    challengeName: "Plastic Free", 
    generalDesc: "Plastic is in just about everything. Fifty percent of the plastic we use is used only once and then thrown away. Enough plastic is thrown away each year to circle the earth four times. We currently recover only five percent of the plastics we produce.",
    challengeImage: "https://image.freepik.com/free-vector/all-plastic-wanna-be-free-card-isolated-white-vector-cartoon-character-illustration-design-simple-flat-style-plastic-free-waste-recycling-concept_92289-112.jpg",
    category: "Lifestyle",
    challengeDay: [
      {
        description: "Don't buy plastic stuff",
        list: [String],
        url: String,
        day: 1
      },
      {
        description: "Going dairy free is good for the environment",
        list: [String],
        url: String,
        day: 2
      },
      {
        description: "Going dairy free is good for the environment",
        list: [String],
        url: String,
        day: 3
      },
      {
        description: "Going dairy free is good for the environment",
        list: [String],
        url: String,
        day: 4
      },
      {
        description: "Going dairy free is good for the environment",
        list: [String],
        url: String,
        day: 5
      },
      {
        description: "Going dairy free is good for the environment",
        list: [String],
        url: String,
        day: 6
      },
      {
        description: "Going dairy free is good for the environment",
        list: [String],
        url: String,
        day: 7
      },
      {
        description: "Going dairy free is good for the environment",
        list: [String],
        url: String,
        day: 8
      },
      {
        description: "Going dairy free is good for the environment",
        list: [String],
        url: String,
        day: 9
      },
      {
        description: "Going dairy free is good for the environment",
        list: [String],
        url: String,
        day: 10
      },
      {
        description: "Going dairy free is good for the environment",
        list: [String],
        url: String,
        day: 11
      },
      {
        description: "Going dairy free is good for the environment",
        list: [String],
        url: String,
        day: 12
      },
      {
        description: "Going dairy free is good for the environment",
        list: [String],
        url: String,
        day: 13
      },
      {
        description: "Going dairy free is good for the environment",
        list: [String],
        url: String,
        day: 14
      },
      {
        description: "Going dairy free is good for the environment",
        list: [String],
        url: String,
        day: 15
      },
      {
        description: "Going dairy free is good for the environment",
        list: [String],
        url: String,
        day: 16
      },
      {
        description: "Going dairy free is good for the environment",
        list: [String],
        url: String,
        day: 17
      },
      {
        description: "Going dairy free is good for the environment",
        list: [String],
        url: String,
        day: 18
      },
      {
        description: "Going dairy free is good for the environment",
        list: [String],
        url: String,
        day: 19
      },
      {
        description: "Going dairy free is good for the environment",
        list: [String],
        url: String,
        day: 20
      },
      {
        description: "Going dairy free is good for the environment",
        list: [String],
        url: String,
        day: 21
      },
    ]
  }   

]



challengesModel.create(lifeStyleChallenges)
  .then(()=>{
    mongoose.connection.close()
  })

  .catch((err)=>{
    next(err)
  })

