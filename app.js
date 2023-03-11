// express server 
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var path = require('path');
var bodyParser = require('body-parser');
var ejs = require('ejs');
const cors = require("cors");
const cookieSession = require("cookie-session");
const session = require("express-session");
const passport = require("passport");
const mongoose = require('mongoose');
const  multer = require('multer');
const bycrypt = require('bcrypt');
const User = require('./db_module/user');




app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


// app.use(
//   cookieSession({
//     name: "bezkoder-session",
//     secret: "COOKIE_SECRET", // should use as secret environment variable
//     httpOnly: true
//   })
// );
// databse
// mongoose.connect('mongodb+srv://gymGuide:sendadrissi@cluster0.v1i6jbx.mongodb.net/?retryWrites=true&w=majority',{
//   useNewUrlParser: true ,
//    useUnifiedTopology:true
//  })

 // routes 
 //home page route
app.get('/', (req, res)=>{
    res.render('pages/index');
});
// store route
app.get('/store', (req, res)=>{
  res.render('pages/store.ejs');
});

// login GET route 
app.get('/plans', (req, res)=>{
    res.render('pages/plans.ejs');
});


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});