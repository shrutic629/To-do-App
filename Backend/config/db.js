const mongoose = require('mongoose');
require('dotenv').config()

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`connected to mongodb`)
    }
    catch(err){
        console.log(`Error connecting to MongoDB: ${err.message}`)
        process.exit(1);
    }
}

module.exports = connectDB;

