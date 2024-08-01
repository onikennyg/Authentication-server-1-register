const mongoose = require("mongoose")

const connectDb = async () => {
    try {
        const connect = await mongoose.connect("mongodb+srv://Kenny:Donsketchy21165994@kenny.lm6ayba.mongodb.net/")
        console.log(`mongoDb connected: ${connect.connection.host}`)
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDb