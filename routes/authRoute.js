const express = require("express");
const { userSignup, userLogin } = require("../controllers/auth.controller");
const { authenticateUser } = require("../middleware/auth.middleware")
const router = express.Router();


router.get('/', (req, res) => {
    res.render('signup')
})

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/home', authenticateUser, (req, res) => {
    res.render('home', { user: req.session.user })
})

router.get('/notification', authenticateUser, (req, res) => {
    res.render('notification', { user: req.session.user })
})

router.get('/message', authenticateUser, (req, res) => {
    res.render('message', { user: req.session.user })
})

router.get('/explore', authenticateUser, (req, res) => {
    res.render('explore', { user: req.session.user })
})

router.get('/search', authenticateUser, (req, res) => {
    res.render('search', { user: req.session.user })
})

router.get('/create-post', authenticateUser, (req, res) => {
    res.render('create-post', { user: req.session.user })
})

router.get('/profile', authenticateUser, (req, res) => {
    res.render('profile', { user: req.session.user })
})



router.post('/signup', userSignup);
router.post('/login', userLogin);


module.exports = router