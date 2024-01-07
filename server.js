const express = require("express");
const path = require("path");
const cors = require("cors");
const session = require("express-session");
const flash = require("connect-flash");
require("dotenv").config();
const authRoute = require('./routes/authRoute');
const dbConnect = require("./config/database");
const app = express();



dbConnect();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/img', express.static(__dirname + 'public/img'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
    secret: 'instagram-clone',
    resave: true,
    saveUninitialized: true
}));


app.use(flash());

app.use((req, res, next) => {
    res.locals.messages = {
        success: req.flash('success'),
        error: req.flash('error'),
        formData: req.flash('formData')[0] || {}
    };
    next();
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', authRoute)


app.listen(port, () => {
    console.log(`Server listening at port: ${port}`)
})