

const LocalStrategy = require("passport-local").Strategy;

const LocalAuth = (passport) =>{
    passport.use(new LocalStrategy(async(username, password, done)=>{


    }))
}

module.exports = LocalAuth