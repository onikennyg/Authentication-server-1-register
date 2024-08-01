const userModels = require("../models/userModels");
const User = require("../models/userModels")

const registerUser = async (req, res) => {
    const {firstName, lastName, email, phone,  password} = req.body
    const userExists = await User.findOne({email});
    if(userExists) {
        res.status(400).json({error: "User already exist"})
    }

    const user = await User.create({firstName, lastName, email, phone,  password})
    if(user) {
        res.status(201).json({message: "User registered successfully", user})
    }else {
        res.status(400).json({error: "invalid user data"})
    }
}

module.exports = {registerUser}