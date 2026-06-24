const express = require("express");
const mongoose = require("mongoose");
const noteRoutes = require("./routes/notesroutes");

const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/notesdb")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/api/notes", noteRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});