var cors = require("cors");
var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  methodOverride = require("method-override");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

app.listen(3000, function () {
  console.log("Node server running on http://localhost:3000");
});

var PositiveThingsCtrl = require("./controllers/positiveThings");

// API routes
var positiveThings = express.Router();

positiveThings
  .route("/positiveThings")
  .post(PositiveThingsCtrl.addPositiveThingsDay);

positiveThings
  .route("/positiveThings/:date")
  .get(PositiveThingsCtrl.getPositiveThingsDay);

app.use("/api", positiveThings);
