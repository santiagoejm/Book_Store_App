require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/bookRoutes");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/books", router);

mongoose
  .connect(
    `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@bookstore.qc4dy.mongodb.net/bookStoreDB?retryWrites=true&w=majority`
  )
  .then(() => console.log("Connected to MongoDB..."))
  .then(() => app.listen(3001))
  .catch((err) => console.log(err));
