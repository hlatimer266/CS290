var express = require("express");
                  
var app = express();
var handlebars = require("express-handlebars").create({defaultLayout: "main"});
var session = require('express-session');
var bodyParser = require("body-parser");

var request = require('request');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(session({secret: 'SuperSecretPassword'}));

app.engine('handlebars',handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port',3000);

app.get('/countpage',function(req,res,next){
  var context = {};
  request("http://api.openweathermap.org/data/2.5/weather?q=corvallis,us&appid=fa7d80c48643dfadde2cced1b1be6ca1", function(err, response, body){
    if(!err && response.statusCode < 400){
      context.owm = JSON.parse(body);
      console.log(context.owm);
      request("http://api.openweathermap.org/data/2.5/weather?q=portland,us&appid=fa7d80c48643dfadde2cced1b1be6ca1", function(err, response, body){
        if(!err && response.statusCode < 400){
          context.owm2 = JSON.parse(body);
          console.log(context.owm2);
          res.render('countpage',context);
        }else{
          console.log(err);
          if(response){
            console.log(response.statusCode);
          }
          next(err);
        }
      }); // end of second request
    } else {
      console.log(err);
      if(response){
        console.log(response.statusCode);
      }
      next(err);
    }
  }); //end of initial request
}); //end of GET request

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});