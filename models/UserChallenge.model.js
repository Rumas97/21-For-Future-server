const { Schema, model } = require("mongoose")
const Challenge = require("./Challenge.model")
const User = require ("./User.model")




const UserChallengeSchema = new Schema ({

  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  challengeId:{
    type: Schema.Types.ObjectId,
    ref: "Challenge",
  },

  dayTracker: [Number]

})

const UserChallengeModel = model("UserChallenge", UserChallengeSchema )

module.exports = UserChallengeModel