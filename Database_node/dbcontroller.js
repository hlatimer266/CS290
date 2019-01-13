var express = require("express");
                  
var app = express();
var handlebars = require("express-handlebars").create({defaultLayout: "main"});
var request = require('request');

//app.use(bodyParser.urlencoded({ extended: false}));
//app.use(session({secret: 'SuperSecretPassword'}));

app.engine('handlebars',handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port',3000);

var mysql = require('mysql');
var pool = mysql.createPool({
  host  : 'classmysql.engr.oregonstate.edu',
  user  : 'cs290_latimerh',
  password: 'Chickens-123',
  database: 'cs290_latimerh'
});

var con = mysql.createConnection({
  host: 'classmysql.engr.oregonstate.edu',
  user: 'cs290_latimerh',
  password: 'Chickens-123'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get('/reset-table',function(req,res,next){
  var context = {};

    pool.query("DROP TABLE IF EXISTS todo", function(err){
    var createString = "CREATE TABLE todo(" +
    "id INT PRIMARY KEY AUTO_INCREMENT," +
    "name VARCHAR(255) NOT NULL," +
    "done BOOLEAN," +
    "due DATE)";
    pool.query(createString, function(err){
      context.results = "Table reset";
      res.render('table',context);
    })
  });
});

app.get('/insert',function(req,res,next){
  var context = {};
  pool.query("INSERT INTO todo (`name`,`done`) VALUES (?,?)", [req.query.name, req.query.done], function(err, result){
    if(err){
      next(err);
      return;
    }
    context.results = "Inserted id " + result.insertId;
    res.render('insert',context);
  });
});

app.get('/',function(req,res,next){
  var context = {};
  pool.query('SELECT * FROM todo', function(err, rows, fields){
    if(err){
      next(err);
      return;
    }
    context.results = rows;
    res.render('home', context);
  });
});

app.get('/safe-update',function(req,res,next){
  var context = {};
  pool.query("SELECT * FROM todo WHERE id=?", [req.query.id], function(err, result){
    if(err){
      next(err);
      return;
    }
    if(result.length == 1){
      var curVals = result[0];
      pool.query("UPDATE todo SET name=?, done=?, due=? WHERE id=? ",
        [req.query.name || curVals.name, req.query.done || curVals.done, req.query.due || curVals.due, req.query.id],
        function(err, result){
        if(err){
          next(err);
          return;
        }
        context.results = "Updated " + result.changedRows + " rows.";
        res.render('home',context);
      });
    }
  });
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});