const { Schema, model } = require("mongoose");

const GoogleSchema = new Schema({
	firstName: String,
	lastName: String,
	email: String,
	image: String,
	googleId: String,
});


const GoogleLogin = model("Google", GoogleSchema);
module.exports = GoogleLogin;