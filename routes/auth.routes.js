const express = require("express")
const router = express.Router()
const UserModel = require ("../models/User.model")
const bcrypt = require("bcryptjs")

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
    console.log('this is where id gets lost')
  }
}


//http://localhost:5005/api/signup
router.post("/signup", (req,res)=>{
  const {username, email, password} = req.body

 //VALIDATION 

  if (!username || !email || !password) {
    res.status(500)
      .json({
        errorMessage: 'Please enter username, email and password'
      });
    return;  
  }

  const myRegex = new RegExp(/^[a-z0-9](?!.*?[^\na-z0-9]{2})[^\s@]+@[^\s@]+\.[^\s@]+[a-z0-9]$/)
    if (!myRegex.test(email)) {
        res.status(500).json({
          errorMessage: 'Email format not correct'
        });
        return;  
    }

  const myPassRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
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
      req.session.loggedInUser = user
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
        })
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
  
  const myRegex = new RegExp(/^[a-z0-9](?!.*?[^\na-z0-9]{2})[^\s@]+@[^\s@]+\.[^\s@]+[a-z0-9]$/)
    if (!myRegex.test(email)) {
      res.status(500).json({
          error: 'Email format not correct',
      })
      return;  
    }

    UserModel.findOne({email})
    .then((userData) => {
      console.log("this is the userData" + userData)
         //check if passwords match
        bcrypt.compare(password, userData.password)
        .then((doesItMatch) => {
              //if it matches
          if (doesItMatch) {
                // req.session is the special object that is available to you
            userData.password = "***"
            req.app.locals.loggedInUser = true
            req.session.loggedInUser = userData
            console.log("the login user" + req.session.loggedInUser)
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

router.get("/profile", userIsLoggedIn, (req,res)=>{
 
  const {_id} = req.session.loggedInUser

  UserModel.findById(_id)
    .then((response)=>{
      console.log("we are here today")
      console.log(response)
      res.status(200).json(response);

    })

    .catch((err)=>{
      console.log('no profile')
    })

})

router.get("/profile/:id", userIsLoggedIn, (req,res)=>{
  const {id} = req.params
  UserModel.findById(id)
    .then((response)=>{
      console.log(response)
      res.status(200).json(response)
    })

    .catch(()=>{
      console.log ("another route failing")
    })
})

router.patch("/profile/:id", userIsLoggedIn, (req, res)=>{
  
  const {id} = req.params 
  //We need to use bcrypt again
  const {username, password, profilePic} = req.body
  let editedProfile = {}
  if (username) {
    editedProfile.username = username
  }
  if (password) {
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);
    editedProfile.password = hash
  }
  if (profilePic) {
    editedProfile.profilePic = profilePic
  }
  console.log(password, editedProfile)
  UserModel.findByIdAndUpdate(id, {$set: editedProfile}, {new: true})
    .then((response)=>{
      response.password = "***";
      res.status(200).json(response)
    })
    

    .catch((err)=>{
      res.status(500).json({
        error: "profile not edited",
        message: err
      })
    })
  
      

})

router.delete("/profile/:id/delete", userIsLoggedIn, (req,res)=>{
  const {id} = req.params
  UserModel.findByIdAndDelete(id)
    .then((response)=>{
      res.status(200).json(response)  
    })

    .catch((err)=>{
      res.status(500).json({
        error: "Profile not deleted",
        message: err
      })  
    })
})

router.post("/logout", (req, res)=>{
  req.session.destroy()
  res.status(204).json({})
})





module.exports = router