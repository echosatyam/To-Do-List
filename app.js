//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const newa = "stringf";
const nw= "asdfa sdfasdf" ;
const onwaaaiting;
const app = express();
var items = [];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.get("/", function (req, res) {

  let options = {
    weekday: "long",
    day: "numeric",
    month: 'long',

  };
  let today = new Date();
  let day = today.toLocaleDateString('en-US', options);
  res.render("lists", {
    kindOfDay: day,
    newListItem: items
  });


});
app.post("/", function (req, res) {
  var item = req.body.newItem;
  items.push(item);
  res.redirect("/");
})
app.listen(3000, function () {
  console.log("Server started on port 3000.");
});