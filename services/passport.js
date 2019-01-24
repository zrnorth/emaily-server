const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys"); // This isn't in git, make your own for dev

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(accessToken); // todo
      console.log(refreshToken); // todo
      console.log(profile); // todo
      console.log(done); // todo
    }
  )
);
