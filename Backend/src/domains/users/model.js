//Model will hold the schema

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({

    emailAddress : {

        type : String,
        required : true,
        unique : true

    },
    password : {

        type : String,
        required : true

    }

})

const User = mongoose.model('User' , UserSchema)

module.exports = User