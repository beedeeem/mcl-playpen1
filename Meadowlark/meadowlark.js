
var express = require('express');

var app = express();

var handlebars = require('express-handlebars')
	.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), showListening);

app.use(express.static(__dirname + '/public'));


//turn on testing - maybe
app.use(setTesting);

//body parsing
app.use(require('body-parser').urlencoded({encoded: true}));


// define proper routes
app.get('/', showHome);
app.get('/about', showAbout);
app.get('/tours/hood-river', function(req, res) {
    res.render('tours/hood-river');
});

app.get('/tours/request-group-rate', function(req, res) {
    res.render('tours/request-group-rate');
});

app.get('/newsletter', showNewsletterForm);

app.post('/process', processNewsletterForm);

app.get('/thank-you', function(req, res) {
    res.render('thank-you');
});

app.use(show500);
app.use(show404);


function showNewsletterForm(req, res) {
    res.render('newsletter', {csrf: 'CSRF token will go here'});
}


function processNewsletterForm(req, res) {
    console.log('Form (from querystring) : ' + req.query.form);
    console.log('CSRF (from hidden field) : ' + req.body._csrf);
    console.log('Name (from visible field) : ' + req.body.name);
    console.log('Email (from visible field) : ' + req.body.email);
    
    res.redirect(303, '/thank-you');
 
}

function setTesting(req, res, next) {
    res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
    next();
}


function showHome(req, res) {
    res.render('home');
}

function showAbout(req, res) {
    
    var fortune = require('./lib/fortunes').getFortune();
    console.log(" returned from module = " + fortune);
    
    res.render('about', 
                {   fortune: fortune,
                    pageTestScript: '/qa/tests-about.js'}
              );
}


function show404(req, res) {
    res.status(404);
    res.render('404');
}


function show500(err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('500');
}

function showListening() {
    console.log('Express started on http://localhost:' + app.get('port'));
}

