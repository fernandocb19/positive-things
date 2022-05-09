var fs = require("fs");
const fetch = require('node-fetch');

exports.addPositiveThingsDay = function (req, res) {
  fs.writeFile(
    "./days/" + req.body.date + ".json",
    JSON.stringify(req.body),
    function (err) {
      if (err) return res.status(500).send(err.message);
      res.status(200).jsonp(req.body);
    }
  );
};

exports.getPositiveThingsDay = function (req, res) {
  fs.readFile("./days/"+req.params.date+".json", "utf8", (err, jsonString) => {
    if (err) {
      if (err) return res.status(500).send(err.message);
      return;
    }
    res.status(200).jsonp(JSON.parse(jsonString));
  });
};
