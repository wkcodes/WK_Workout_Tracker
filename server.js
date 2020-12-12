// Express server
let express = require('express');
let mongoose = require("mongoose");

require('dotenv').config();

let PORT = process.env.PORT || 3000

let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.ATLAS_URI || "mongodb://localhost/exercise", {
  useNewUrlParser: true,
  useFindAndModify: false
});

//app.use(require("./routes/api.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });