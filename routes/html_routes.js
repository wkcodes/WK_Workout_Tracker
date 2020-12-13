//Route to the exercise page

let path = require("path");

module.exports = function (app) {
  app.get("/exercise", (req, res) => {
    res.sendFile(path.join(process.cwd() + "/public/exercise.html"));
  });
};
