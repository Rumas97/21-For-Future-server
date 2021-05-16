const { Schema, model } = require("mongoose")

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