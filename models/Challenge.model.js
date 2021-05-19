const { Schema, model } = require("mongoose");

const ChallengeSchema = new Schema ({

  challengeName: String, 
  challengeImage: String,
  generalDesc: String,
  category: {
      type: String,
      enum: ["Food", "Lifestyle", "Mobility", "Period"],
  },

  challengeDay: [

     {
        description: String,
        list: [String],
        url: String,
        day: {
            type: Number,
            max: 21,
            min: 1,
        }
    },
  ] 

})

const ChallengeModel = model("Challenge", ChallengeSchema )

module.exports = ChallengeModel