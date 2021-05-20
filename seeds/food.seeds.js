require("../db")
const mongoose = require("mongoose")
const challengesModel = require ("../models/Challenge.model")

const challenges = [
  {
    challengeName: "Dairy Free", 
    generalDesc: "Cow’s milk is inarguably the most popular and accessible kind of milk. Unfortunately, it has by far the greatest impact on the environment. Cow’s milk requires nine times as much land and produces three times as much carbon emissions than any non-dairy milk alternative",
    challengeImage: "https://i.ibb.co/XV4F5fG/dairy-free.png",
    category: "Food",
    challengeDay: [
      {
        description: "For today, go out and buy some plant based milk. It can be almond, soy, oat",
        list: ["Water, Almond, Glass"],
        url: String,
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
  },
  {
    challengeName: "Go vegan", 
    generalDesc: "A global shift to a plant-based diet could reduce mortality and greenhouse gases caused by food production by 10% and 70%, respectively, by 2050",
    challengeImage: "https://cdn.dribbble.com/users/427368/screenshots/11523001/dribbble.jpg",
    category: "Food",
    challengeDay: [
      {
        description: "Getting to Know the Grocery Store",
        list: ["Water, Almond, Glass"],
        url: String,
        day: 1
      },
      {
        description: "Putting to Rest the Great Protein Myth",
        list: [String],
        url: String,
        day: 2
      },
      {
        description: "Better Baking without Eggs",
        list: [String],
        url: String,
        day: 3
      },
      {
        description: "Skipping the Middle Fish: Getting Omega 3s from the Source",
        list: [String],
        url: String,
        day: 4
      },
      {
        description: "Ways to cook tofu so it doesn't taste like sponge",
        list: [String],
        url: String,
        day: 5
      },
      {
        description: "The vegan challenge",
        list: [String],
        url: String,
        day: 6
      },
      {
        description: "The vegan challenge",
        list: [String],
        url: String,
        day: 7
      },
      {
        description: "The vegan challenge",
        list: [String],
        url: String,
        day: 8
      },
      {
        description: "The vegan challenge",
        list: [String],
        url: String,
        day: 9
      },
      {
        description: "The vegan challenge",
        list: [String],
        url: String,
        day: 10
      },
      {
        description: "The vegan challenge",
        list: [String],
        url: String,
        day: 11
      },
      {
        description: "The vegan challenge",
        list: [String],
        url: String,
        day: 12
      },
      {
        description: "The vegan challenge",
        list: [String],
        url: String,
        day: 13
      },
      {
        description: "The vegan challenge",
        list: [String],
        url: String,
        day: 14
      },
      {
        description: "The vegan challenge",
        list: [String],
        url: String,
        day: 15
      },
      {
        description: "The vegan challenge",
        list: [String],
        url: String,
        day: 16
      },
      {
        description: "The vegan challenge",
        list: [String],
        url: String,
        day: 17
      },
      {
        description: "The vegan challenge",
        list: [String],
        url: String,
        day: 18
      },
      {
        description: "The vegan challenge",
        list: [String],
        url: String,
        day: 19
      },
      {
        description: "The vegan challenge",
        list: [String],
        url: String,
        day: 20
      },
      {
        description: "The vegan challenge",
        list: [String],
        url: String,
        day: 21
      },
    ]
  },

  {
    challengeName: "Reduce food waste", 
    generalDesc: "The United Nations estimates that one in nine people in the world do not have access to sufficient food to lead a healthy life. More people are reported to die from hunger every day than AIDS, malaria and tuberculosis combined. But at the same time, nearly one-third of the food that is produced in the world is lost or wasted due to one reason or the other. Food wastage, which includes both food loss and food waste, is not only morally irresponsible, but also causes huge economical losses as well as severe damage to the world around us",
    challengeImage: "https://media.istockphoto.com/vectors/reusable-grocery-eco-bag-with-vegetables-hand-drawn-vector-id1149453752?k=6&m=1149453752&s=612x612&w=0&h=AM3R23OkCTv86dYq5IiR7T2ousvYyLJwCaNKi8YJKmU=",
    category: "Food",
    challengeDay: [
      {
        description: "Take a look inside your refridgerator",
        list: ["Is there anything you can cook with, Last nights leftovers, bananas going soft"],
        url: String,
        day: 1
      },
      {
        description: "Storing food better to last longer",
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
        description: "This is description for day 4",
        list: [String],
        url: String,
        day: 4
      },
      {
        description: "This is description for day 5",
        list: [String],
        url: String,
        day: 5
      },
      {
        description: "This is description for day 6",
        list: [String],
        url: String,
        day: 6
      },
      {
        description: "This is description for day 7",
        list: [String],
        url: String,
        day: 7
      },
      {
        description: "This is description for day 8",
        list: [String],
        url: String,
        day: 8
      },
      {
        description: "This is description for day 9",
        list: [String],
        url: String,
        day: 9
      },
      {
        description: "This is description for day 10",
        list: [String],
        url: String,
        day: 10
      },
      {
        description: "This is description for day 11",
        list: [String],
        url: String,
        day: 11
      },
      {
        description: "This is description for day 12",
        list: [String],
        url: String,
        day: 12
      },
      {
        description: "This is description for day 13",
        list: [String],
        url: String,
        day: 13
      },
      {
        description: "This is description for day 14",
        list: [String],
        url: String,
        day: 14
      },
      {
        description: "This is description for day 15",
        list: [String],
        url: String,
        day: 15
      },
      {
        description: "This is description for day 16",
        list: [String],
        url: String,
        day: 16
      },
      {
        description: "This is description for day 17",
        list: [String],
        url: String,
        day: 17
      },
      {
        description: "This is description for day 18",
        list: [String],
        url: String,
        day: 18
      },
      {
        description: "This is description for day 19",
        list: [String],
        url: String,
        day: 19
      },
      {
        description: "This is description for day 20",
        list: [String],
        url: String,
        day: 20
      },
      {
        description: "This is description for day 21",
        list: [String],
        url: String,
        day: 21
      },
    ]
  },
  {
    challengeName: "Happy veggies", 
    generalDesc: "If we really want to reduce the human impact on the environment, the simplest and cheapest thing anyone can do is to eat less meat. Behind most of the joints of beef or chicken on our plates is a phenomenally wasteful, land- and energy-hungry system of farming that devastates forests, pollutes oceans, rivers, seas and air, depends on oil and coal, and is significantly responsible for climate change. ",
    challengeImage: "https://image.freepik.com/free-vector/cute-funny-happy-vegetables-fruits_1270-440.jpg",
    category: "Food",
    challengeDay: [
      {
        description: "For today, go out and buy some plant based milk. It can be almond, soy, oat",
        list: ["Water, Almond, Glass"],
        url: String,
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
  }, 

]



challengesModel.create(challenges)
  .then(()=>{
    mongoose.connection.close()
  })

  .catch((err)=>{
    next(err)
  })

