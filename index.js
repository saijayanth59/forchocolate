const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.set(express.static(path.join(__dirname, "views")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("index", { name: "", bmi: 0 });
});

app.post("/", (req, res) => {
  weight = parseFloat(req.body.weight);
  height = parseFloat(req.body.height);
  result = weight / (height * height);

  res.render("index", { name: req.body.name, bmi: result });
});

app.listen(2222, () => {
  console.log("listening,,");
});
