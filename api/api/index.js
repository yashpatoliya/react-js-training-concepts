const express = require('express');
const bodyParser = require('body-parser');
const port = 8000;

const app = express();

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const db = require('./config/mongoose');

const passportJwt = require('./config/passport-jwt-strategy');

const session = require('express-session');

app.use(session({
    name : "rw3-6pm-nodeapi",
    secret : "RNW3",
    saveUninitialized : true,
    resave : true,
    cookie : {
        maxAge : 1000*60*60*100
    }
}))

app.use(express.urlencoded());
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use('/',require('./routes'));

app.listen(port,(err)=>{
    if(err){
        console.log("Server not start");
        return false;
    }
    console.log("Server is start on port :- "+port);
})