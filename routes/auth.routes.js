const express = require("express")
const router = express.Router()
const UserModel = require ("../models/User.model")
//We require bcrypt.js
const bcrypt = require("bcryptjs")

//http://localhost:5005/api/signup
router.post("/signup", (req,res)=>{
  const {username, email, password, profilePic} = req.body

 //VALIDATION 

  if (!username || !email || !password) {
    res.status(500)
      .json({
        errorMessage: 'Please enter username, email and password'
      });
    return;  
  }

  const myRegex = new RegExp(/^[a-z0-9](?!.*?[^\na-z0-9]{2})[^\s@]+@[^\s@]+\.[^\s@]+[a-z0-9]$/);
    if (!myRegex.test(email)) {
        res.status(500).json({
          errorMessage: 'Email format not correct'
        });
        return;  
    }

  const myPassRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
    if (!myPassRegex.test(password)) {
      res.status(500).json({
        errorMessage: 'Password needs to have 8 characters, a number and an Uppercase letter'
      });
      return;  
    } 

    //For bcrypt 
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(password, salt);

  UserModel.create({username, email, password: hash})
    .then((user)=>{
      user.password = "***"; //Just changing the object to not send it to the front end
      res.status(200).json(user);
    })

    .catch((err)=>{
      if (err.code === 11000) {
        res.status(500).json({
          errorMessage: 'username or email entered already exists!',
          message: err,
        });
      } 
      else {
        res.status(500).json({
          errorMessage: 'Something went wrong! Go to sleep!',
          message: err,
        });
      }
    })


}) 

router.post("/login", (req, res)=>{
  const {email, password} = req.body

 //Validation
  if ( !email || !password) {
    res.status(500).json({
        error: 'Please enter email and password',
    })
    return;  
  }
  
  const myRegex = new RegExp(/^[a-z0-9](?!.*?[^\na-z0-9]{2})[^\s@]+@[^\s@]+\.[^\s@]+[a-z0-9]$/);
    if (!myRegex.test(email)) {
      res.status(500).json({
          error: 'Email format not correct',
      })
      return;  
    }

    UserModel.findOne({email})
    .then((userData) => {
         //check if passwords match
        bcrypt.compare(password, userData.password)
        .then((doesItMatch) => {
              //if it matches
          if (doesItMatch) {
                // req.session is the special object that is available to you
            userData.password = "***";
            req.session.loggedInUser = userData;
            res.status(200).json(userData)
          }
              //if passwords do not match
          else {
            res.status(500).json({
            error: 'Passwords don\'t match',
            })
            return; 
          }
        })

        .catch(() => {
             res.status(500).json({
               error: 'Bcrypt crashing',
             })
            return; 
        });
    })

  //throw an error if the user does not exists 
    .catch((err) => {
      res.status(500).json({
          error: 'Email does not exist',
          message: err
      })
      return;  
    });

})

router.post("/logout", (req, res)=>{
  req.session.destroy()
  res.status(204).json({})
})

//--------The Middleware-----------//
const userIsLoggedIn = (req, res, next)=>{
  if (req.session.loggedInUser){
    next()

  }
  else {
    res.status(401).json({
      message: 'Unauthorized user',
      code: 401,
    })
  }
}

router.get("/profile", userIsLoggedIn, (req,res,next)=>{
  res.status(200).json(req.session.loggedInUser);
})

module.exports = router