const router = require("express").Router();
const Workout = require("../models/model.js");

// Get all workouts (working)
router.get("/api/workout", (req, res) => {
    Workout.find({})
      .sort({ date: -1 })
      .then(Workout => {
        res.json(Workout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.post("/api/workout", ({ body }, res) => {
    Workout.create(body)
      .then(Workout => {
        res.json(Workout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

module.exports = router;