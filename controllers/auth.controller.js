const User = require("../models/auth.model");
const bcrypt = require("bcrypt")
const { body, validationResult } = require("express-validator")

const userSignup = async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const errorMessages = errors.array().map(error => error.msg);

        req.flash('error', errorMessages);
        req.flash('formData', req.body);
        res.redirect('/');
        return;
    }

    const { username, email, name, password } = req.body

    if (!name || !username || !email || !password) {
        req.flash('error', "All Fields are required");
        res.redirect('/')
        return;
    }

    try {
        const existingUser = await User.findOne({ email })

        if (existingUser) {
            req.flash('error', "User Already Exist...");
            res.redirect('/')
            return;
        }

        const usernameExist = await User.findOne({ username })

        if (usernameExist) {
            req.flash('error', "Username already exist!");
            res.redirect('/')
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new User({
            username,
            email,
            name,
            password: hashedPassword
        })

        await newUser.save()

        req.session.user = {
            _id: newUser._id,
            name: newUser.name,
            username: newUser.username,
            email: newUser.email,
            profilePicture: newUser.profilePicture
        };

        req.flash('success', "User Successfully Created");
        return res.redirect('/login')

    } catch (error) {
        req.flash('error', "Internal Server Error");
    }
}


const userLogin = async (req, res) => {
    const { username, password } = req.body

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errorMessages = errors.array().map(error => error.msg);


        req.flash('error', errorMessages);
        res.redirect('/login');
        return;
    }

    if (!username || !password) {
        req.flash('error', "All Fields are required");
        res.redirect('/login');
        return;
    }


    try {
        const existingUser = await User.findOne({ username })

        if (!existingUser) {
            req.flash('error', "User does not exist, proceed to the login page...");
            res.redirect('/login');
            return;
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)

        if (!isPasswordCorrect) {
            req.flash('error', "Invalid Username/Password");
            res.redirect('/login');
            return;
        }

        req.session.user = {
            _id: existingUser._id,
            name: existingUser.name,
            username: existingUser.username,
            email: existingUser.email,
            profilePicture: existingUser.profilePicture
        };

        req.session.user = existingUser;
        req.flash('success', "Login Successfull");

        return res.redirect("/home")

    } catch (error) {
        req.flash('error', "Internal Server Error");
    }
}


module.exports = { userSignup, userLogin }