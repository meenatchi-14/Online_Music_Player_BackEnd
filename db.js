const { default: mongoose, mongo } = require("mongoose");
require("dotenv/config")
// connecting mongodb
const connectDB = () => {
    try {
        mongoose.connect(process.env.DS_STRING)
        mongoose.connection
            .once("open", () => console.log("Connected"))
    } catch (error) {
        console.log(`ERROR"${error}`)
    }
}

module.exports = connectDB;
