const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { roles } = require('../utils/constants');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: [roles.admin, roles.employer, roles.candidate],
        default: roles.candidate
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
})

//We are Hashing the Password

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = bcrypt.hashSync(this.password, 12);
        this.cpassword = bcrypt.hashSync(this.cpassword, 12);
        if(this.email === process.env.ADMIN_EMAIL.toLowerCase()) {
            this.role = roles.admin
        }
    }
    next();
});

//We are generating tokens
userSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (err) {
        console.log(err);
    }
}

const User = mongoose.model('USER', userSchema)

module.exports = User;