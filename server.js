const express = require ('express')
const app = express ()
const path = require('path')
const passport = require('passport')
const Localstrategy = require('passport-local').Strategy
const session = require ('express-session')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000;
const db = require('./config/db.config')
require('dotenv').config()

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({
  secret:"keyboard cat",
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge:6000}
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, "client/build/")));
app.use(require('./routes/routes.js'))

// resolves all paths to index.hmtl
app.all("*", (req, res) => {
  res.sendFile(path.resolve("../client/build/index.html"));
});


app.listen(port, ()=> console.log(`Listening on port ${port}`))

