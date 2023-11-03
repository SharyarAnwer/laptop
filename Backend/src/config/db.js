// This will hold the information regarding connection to the database.
require("dotenv").config();

//This will help to connect to MongoDb database
const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI , {

    useNewUrlParser: true,
    useUnifiedTopology: true

  }
).then(() => {

    console.log("DB Connected Successfully")

}).catch((err) => {

    console.log(err)

})
