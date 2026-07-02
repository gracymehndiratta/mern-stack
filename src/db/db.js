const mongoose = require('mongoose');





async function connectDB(){
    await mongoose.connect(
      "mongodb+srv://mern:qSHdsUBhhTrgvK8R@mern-backend.h8vrryg.mongodb.net/halley"
    );
    console.log("connected to db")
}

module.exports = connectDB;