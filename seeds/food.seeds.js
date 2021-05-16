require("../db")
const mongoose = require("mongoose")
const challengesModel = require ("../models/Challenge.model")

const challenges = [
  {
    challengeName: "Dairy Free", 
    generalDesc: "Cow’s milk is inarguably the most popular and accessible kind of milk. Unfortunately, it has by far the greatest impact on the environment. Cow’s milk requires nine times as much land and produces three times as much carbon emissions than any non-dairy milk alternative",
    challengeImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROqu7MTjyTPUjUX2jNGGr0cd2xJtgpV51CIA&usqp=CAU",
    category: "Food",
    challengeDay: [
      {
        description: "For today, go out and buy some plant based milk. It can be almond, soy, oat",
        list: ["Water, Almond, Glass"],
        url: <iframe width="560" height="315" src="https://www.youtube.com/embed/TQtRv-wdaJU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
        day: 1
      },
      {
        description: "This is description for day 2",
        list: [String],
        url: String,
        day: 2
      },
      {
        description: "This is description for day 3",
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



challengesModel.create(challenges)
  .then(()=>{
    mongoose.connection.close()
  })

  .catch((err)=>{
    next(err)
  })

