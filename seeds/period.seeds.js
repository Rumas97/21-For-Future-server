require("../db")
const mongoose = require("mongoose")
const challengesModel = require ("../models/Challenge.model")

const periodChallenges = [
  {
    challengeName: "A Happy Period", 
    generalDesc: "Did you know that on average, the plastic from tampons and pads can take anywhere from 500 to 800 years to decompose? In particular, the plastics used in pads and tampon applicators are made out of low-density polyethylene that requires energy-intensive processing. When you consider the whole life cycle of these products, fossil fuel emissions of plastic production damage the environment the most.",
    challengeImage: "https://image.freepik.com/free-vector/cute-happy-earth-planet-cloth-pad-menstrual-cup-zero-waste-period-isolated-white-vector-cartoon-character-illustration-design-simple-flat-style-eco-friendly-period-concept_92289-128.jpg",
    category: "Period",
    challengeDay: [
      {
        description: "Inform yourself about the alternatives",
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



challengesModel.create(periodChallenges)
  .then(()=>{
    mongoose.connection.close()
  })

  .catch((err)=>{
    next(err)
  })

