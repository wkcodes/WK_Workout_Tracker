const router = require("express").Router();
const Exercise = require("../models/exercise.js");

// Get all exercises(working)
router.get("/api/workout", (req, res) => {
    Exercise.find({})
      .sort({ date: -1 })
      .then(exercise => {
        res.json(exercise);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.post("/api/workout", ({ body }, res) => {
    Transaction.create(body)
      .then(exercise => {
        res.json(exercise);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

module.exports = router;