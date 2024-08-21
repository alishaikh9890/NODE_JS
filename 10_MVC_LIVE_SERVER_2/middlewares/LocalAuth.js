

const LocalStrategy = require("passport-local").Strategy;

const LocalAuth = (passport) =>{
    passport.use(
        new LocalStrategy(async(username, password, done)=>{

       let User = await user.findOne({username : username});

       if(!User) {
        return done(null, false)
       }

       if(User.password != password){
        return done(null, false);
       }
       return done(null, User);
    })
 );

 passport.serializeUser((user, done) => {
    done(null, user.id)
 })
}

module.exports = LocalAuth 