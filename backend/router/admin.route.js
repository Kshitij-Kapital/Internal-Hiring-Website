const User = require('../model/userSchema');
const router = require('express').Router();

router.get('./users', async (req, res, next) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch(err){
        next(err);
    }
});

module.exports = router;