require("dotenv").config();

console.log("MONGO_URI:",process.env.MONGO_URI);
console.log("PORT:",process.env.PORT );
const mongoose = require("mongoose");


const connectDB = async () => {
    try {
        console.log("Connecting to MongoDB...");
        console.log("Mongo URI:", process.env.MONGO_URI);

        const conn = await
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    });

    console.log('MongoDB Connected: $ {conn.connection.host}');
    } catch (error) {
      console.error('Error:  ${error.message}');
      process.exit(1);
    }
};

module.exports = connectDB;