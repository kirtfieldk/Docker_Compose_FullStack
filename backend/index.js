const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const key = require("./keys");
mongoose.Promise = global.Promise;
app.use(cors());
app.use(bodyParser.json());
mongoose.connect(key.key);
require("./Schema");
const testerSchema = mongoose.model("test");

app.get("/", async (req, res) => {
  try {
    const response = await testerSchema.find({ display: "true" });
    return res.status(200).json({ response });
  } catch (err) {
    return res.status(404).json({ msg: "Could not locate" });
  }
});
app.post("/", async (req, res) => {
  try {
    const { title } = req.body;
    const user = new testerSchema({
      title,
      display: "true"
    });
    await user.save();
    return res.status(200).json({ user });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ msg: "COuld Not add" });
  }
});

app.listen(5000);
