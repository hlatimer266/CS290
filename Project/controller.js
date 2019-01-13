var express = require("express");
var bodyParser = require("body-parser");                    
var app = express();
var handlebars = require("express-handlebars").create({defaultLayout: "main"});

app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");
app.set("port", 62618);
app.use(express.static(__dirname + '/views'));

app.get('/',function(req,res){
  res.render('home.handlebars') 
});

app.get('/contact',function(req,res){
  res.render('contact.handlebars') 
});

app.get('/projects',function(req,res){
  res.render('projects.handlebars') 
});

app.get('/personal',function(req,res){
  res.render('personal.handlebars') 
});

app.use(function(req, res){
	res.status(404);
	res.render("404");
});

app.use(function(err, req, res, next){
	console.log(err.stack);
	res.status(500);
	res.render("500");
});

app.listen(app.get("port"), function(){
	console.log("Express started on port 62618");
});