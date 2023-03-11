const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    email: { 
        type: String,
        required: true,
        unique: true 
    },
    password:{ 
        type: String, 
        required:true 
    },
    profileImage: { 
        type: String,
         default: 'default.png'
         },
    phoneNumber: { 
        type: String ,
         required:true
         },
    isMember : {
        type :Boolean ,
         default : false
        },
    isAdmin : {type :Boolean
         , default : false
        },
    isTrianer : {
        type :Boolean ,
         default : false},
    createdAt: {
        type: Date,
        default: Date.now,
      },
});
const User = mongoose.model('User', userSchema)
module.exports = User