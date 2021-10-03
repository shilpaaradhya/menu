var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const Menu = require('./model/menu');
// const checkAuth = require('./middleware/check-auth')
var app = express();

var bodyParser = require('body-parser');
const { error } = require('console');

// EvnF8OYFQewh5ovy
mongoose.connect("mongodb+srv://ana:rxzn1nCnntODy7xp@cluster0.hl9eq.mongodb.net/mvr?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log('connected to Database')
    })
    .catch((err) => {
        console.log(err)
    })
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json({ limit: '5mb' }));

app.options('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma, Expires");
    res.sendStatus(200);
    next();
});

app.use('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Controll-Allow-Headers", "GET ,POST , PATCH , DELETE , OPTIONS");
    next();
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public/dist/express')));

app.get(['/home', '/', '/login', '/signup', '/home/*', '/dine'], function(req, res) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key,token,Origin,X-Origin, Authorization');
    res.sendFile('index.html', { root: __dirname + '/public/dist/express' });
});

app.use('/', indexRouter);
app.use('/users/', usersRouter);

app.post("/api/postData", (req, res, next) => {
    const menu = new Menu({
        menu: req.body,
    });
    menu.save();
    res.status(201).json({
        message: menu,
    })
});


app.get("/api/getData", (request, response) => {
        const postQuery = Menu.find();
        postQuery.then(documents => {

            response.status(201).json({
                message: documents,
            })
        });
    }),


    //     app.delete("/api/deleteData/:id", checkAuth, (req, res, next) => {
    //     Post.deleteOne({ _id: req.params.id, creator: req.userData.userId }).then(result => {
    //         if (result.n > 0) {
    //             res.status(200).json({ message: 'post deleted' })
    //         } else
    //             res.status(401).json({ message: 'Un Authorised' })
    //     })

    // });

    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        next(createError(404));
    });

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


module.exports = app;