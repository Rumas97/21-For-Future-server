const { Schema, model } = require("mongoose")

const userSchema = new Schema({
  username: {
    type: String,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
  },

  profilePic: String,
  googleId: String,
  
});

const User = model("User", userSchema)

module.exports = User
