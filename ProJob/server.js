//server.js
//…
//var bodyParser = require(‘body-parser’);
var Comment = require(‘./model/comments’);
//…


const mangod = require('mangod');

var port = process.env.API_PORT || 3001;

//db config
//mongoose.connect(‘mongodb://localhost:27017/');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
axios.get('/register', (req, res) => {
  res.send({ express: 'Hello From Express' });
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("users").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});

});

app.listen(port, () => console.log(`Listening on port ${port}`));
