const user = require("../models/user.schema");

const LocalStrategy = require("passport-local").Strategy;

const LocalAuth = (passport) =>{
    passport.use(
        new LocalStrategy(async(username, password, done)=>{

       let User = await user.findOne({username : username});

       try{
            if(!User) {
            return done(null, false)
            }
            if(User.password != password){
            return done(null, false);
            }
            return done(null, User);
       }
       catch (error){
            return done(error, false)
       }

    })
 );

 passport.serializeUser((user, done) => {
    done(null, user.id)
 })

 passport.deserializeUser(async(id, done) =>{
   let User = await user.findById(id);
   return done(null, User);
 })
}

module.exports = LocalAuth 