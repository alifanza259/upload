var expess = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var app = expess();

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.post("/image", function(req, res){
  var name = req.body.name;
  var img = req.body.image;
  var realFile = Buffer.from(img,"base64");
  console.log(realFile);
  fs.writeFile(name, realFile, function(err) {
      if(err)
         console.log(err);
   });
   res.send("OK");
 });

app.listen(3000);