const express = require("express");
const path = require("path");
const uniqid = require('uniqid');
const Markov = require('js-markov');
const MarkovGen = require('markov-generator');

//let rita = require('rita');
//let rs = rita.RiString("The elephant took a bite!");
//console.log(rs.features());


const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./index.html"));

    
  });
  
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
    
    
  });

  //browserify main.js -o bundle.js
  