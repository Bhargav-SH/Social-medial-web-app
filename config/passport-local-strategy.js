const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');
//we need to tell passport to use this local strategy

//authentication using passport
//check passport strategy website for code
passport.use(new LocalStrategy({
    usernameField: 'email'
    },
    function(email, password, done){
   //find a user and establish a identity **https://www.passportjs.org/packages/passport-local/
        User.findOne({email: email}, function (err,user){

            // if(err){
            //     console.log('Error in finding user---> passport');
            //     return done(err);
            // }

            if(!user || user.password!=password){
                console.log('Invalid username/password');
                return done(null,false); //authentication is false
            }

            return done(null,user);
        });



        // .catch((err)=>{
        //     console.log('error in finding user');
        // })

    }

));


//serializing the user to decide which key is to be kept in the cookies
//**
passport.serializeUser(function(user,done){
    done(null, user.id) // null--->error is not there
})


//deserialize the user from the key in the cookies
passport.deserializeUser(function(id,done){
    User.findById(id, function(err,user){
        if(err){
            console.log('Error in finding user---> passport');
            return done(err);
        }

        return done(null,user); // no error and user is find

    });
});


module.exports =passport;

