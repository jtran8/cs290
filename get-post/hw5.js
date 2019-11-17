/*CS290 - HW Assignment 5: GET and POST checker
  Name: Jacky Tran
  Date: Nov 17, 2019*/

var express = require('express');
var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 39876);

app.get('/',function(req, res){
    var arr = [];

    for(var key in req.query){
        arr.push({'name': key, 'value': req.query[key]});
    }
        
    var context = {};
    context.list = arr;
    res.render('get', context);
});

app.post('/',function(req, res){
    var arr = [];

    for(var key in req.body){
        arr.push({'name': key, 'value': req.body[key]});
    }

    var context = {};
    context.list = arr;
    res.render('post', context);
});

app.use(function(req, res){
    res.status(404);
    res.render('404');
});

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('plain/text');
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});