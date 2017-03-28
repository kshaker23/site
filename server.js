var express     =   require("express");
var app         =   express();
var router      =   express.Router();
var bodyParser  =   require("body-parser");


//
//  var multer = require('multer');
//  var upload = multer({ dest: 'uploads/'});
// var fs = require("fs");
// //
//
var db     =   require("mongoose");
 //db.connect("mongodb://localhost:27017/registerdb");
  db.connect("mongodb://miniproject:kareem@ds143900.mlab.com:43900/heroku_44cvmcvt");

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname+ '/public'));

app.use(router);

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({"extended" : false}));

app.use('/',router);



app.use('/',router);

require('./router/main')(app);
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
//


  //second parameter is multer middleware.

var server     =    app.listen(3000,function(){
console.log("Express is running on port 3000");

});
