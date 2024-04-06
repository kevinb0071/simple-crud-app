const express = require("express");
const mongoose = require("mongoose");
const { restart } = require("nodemon");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/products", productRoute);


// Home Page
app.get("/", (req, res) => {
  res.send("Hello From API Server");
});

mongoose
  .connect(
    "mongodb+srv://admin:Ashnoelle0071!@backenddb.u1jobfw.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection Failed");
  });
