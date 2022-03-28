let express = require('express');
let app = express();
app.listen(3000);
app.get("/html", (req, res)=>{res.send("<html><head></head><body><h1>Hello world</h1></body></html>");});
app.get("/json", (req, res)=>{res.json({firstname: "john", lastname: "smith"});});
app.get('/', function (req, res) {
    res.render('index', {});
  });
  