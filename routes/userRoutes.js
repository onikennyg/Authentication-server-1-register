const express = require("express")
const { registerUser } = require("../controllers/userControllers")
const router = express.Router()


router.post("/user/register", registerUser)






module.exports = router