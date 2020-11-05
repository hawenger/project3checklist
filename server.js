const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));

//require("./routes/apiRoutes")(app);
//require("./routes/htmlRoutes")(app);

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./index.html"));
  });


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  