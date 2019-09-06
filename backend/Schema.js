// This is the Blogpost database!!
const mongoose = require("mongoose");
const { Schema } = mongoose;
const testSchema = new Schema({
  title: { type: String, required: true },
  display: String
});
mongoose.model("test", testSchema);
