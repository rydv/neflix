const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");

//Register
router.post("/register", async (req,res) => {
    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password,process.env.SECRET_KEY).toString()
        })
    
        const user = await newUser.save()
        res.status(201).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
});

//Login
router.get("/login", async (req,res) => {
    try {
        const user = await User.findOne({email:req.body.email});
        // console.log(user)
        if(user){
            const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
            const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
            if(originalPassword === req.body.password){
                const {password, ...info} = user._doc;
                res.status(200).json(info);
            }else{
                res.status(401).json("Wrong password or username!")
            }
        }else{
            res.status(401).json("Wrong password or username!")
        }
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;