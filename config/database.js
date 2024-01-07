const mongoose = require("mongoose");

const dbConnect = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)

        console.log("Connected to the Database Successfully...")
    } catch (error) {
        console.log({ message: "Unable to connect to the database", error })
    }
}

module.exports = dbConnect