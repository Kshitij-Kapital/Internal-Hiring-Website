const jwt = require('jsonwebtoken');
const { response } = require('express');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

require('../db/connection');
const User = require("../model/userSchema");

router.get('/', (req, res) => {
    res.send(`Hello World from router`);
});

//This is Using Promises

// router.post('/register', (req, res) => {
//     const { firstname, lastname, email, password, cpassword} = req.body;

//     if(!firstname || !lastname || !email || !password || !cpassword) {
//         return res.status(422).json({ error: "Please fill the data"});
//     }

//     User.findOne({ email:email })
//         .then((userExist) => {
//             if(userExist) {
//                 return res.status(422).json({ error: "Email already Exist"});
//             }

//             const user = new User({ firstname, lastname, email, password, cpassword });

//             user.save().then(() => {
//                 res.staus(201).json({ message: "User Register Successfully"});
//             }).catch((err) => res.status(500).json({ error: "Failed to Register"}));

//         }).catch(err => { console.log(err); });
// });


// This is Using Async Await

router.post('/register', async (req, res) => {

    const { firstname, lastname, email, password, cpassword } = req.body;

    if (!firstname || !lastname || !email || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill the data" });
    }

    try {

        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: "Email already Exist" });
        } else if (password != cpassword) {
            return res.status(422).json({ error: "Password is not matching" });
        } else {
            const user = new User({ firstname, lastname, email, password, cpassword });

            await user.save();

            res.status(201).json({ message: "User Register Successfully" });
        }

    } catch (err) {
        console.log(err);
    }
});

//Login Route
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return response.status(400).json({ error: "Please fill the data" });
        }

        const userLogin = await User.findOne({ email: email });

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            const token = await userLogin.generateAuthToken();

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });

            if (!isMatch) {
                res.status(400).json({ error: "Invalid Credientials" });
            } else {
                res.json({ message: "User Login Successfully" });
            }
        } else {
            res.status(400).json({ error: "Invalid Credientials" });
        }



    } catch (err) {
        console.log(err);
    }
});

module.exports = router;