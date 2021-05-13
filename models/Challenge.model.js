const { Schema, model } = require("mongoose");

const ChallengeSchema = new Schema ({

  challengeName: String, 
  challengeImage: String,
  category: {
      type: String,
      enum: ["Food", "Lifestyle", "Mobility", "Period"],
  },

  day1: {
      description: String,
      list: [String],
      url: String,
  },

  day2: {
      description: String,
      list: [String],
      url: String,
  },

  day3: {
      description: String,
      list: [String],
      url: String,
  },

  day4: {
      description: String,
      list: [String],
      url: String,
  },

  day5: {
      description: String,
      list: [String],
      url: String,
  },

  day6: {
      description: String,
      list: [String],
      url: String,
  },

  day7: {
      description: String,
      list: [String],
      url: String,
  },

  day8: {
      description: String,
      list: [String],
      url: String,
  },

  day9: {
      description: String,
      list: [String],
      url: String,
  },

  day10: {
      description: String,
      list: [String],
      url: String,
  },

  day11: {
      description: String,
      list: [String],
      url: String,
  },

  day12: {
      description: String,
      list: [String],
      url: String,
  },

  day13: {
      description: String,
      list: [String],
      url: String,
  },

  day14: {
      description: String,
      list: [String],
      url: String,
  },

  day15: {
      description: String,
      list: [String],
      url: String,
  },

  day16: {
      description: String,
      list: [String],
      url: String,
  },

  day17: {
      description: String,
      list: [String],
      url: String,
  },

  day18: {
      description: String,
      list: [String],
      url: String,
  },

  day19: {
      description: String,
      list: [String],
      url: String,
  },

  day20: {
      description: String,
      list: [String],
      url: String,
  },

  day21: {
      description: String,
      list: [String],
      url: String,
  }

})

const ChallengeModel = model("Challenge", ChallengeSchema )

module.exports = ChallengeModel