const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

// User can read pictures from it
app.use("/storage_user", express.static("storage_user"));
app.use("/storage_product", express.static("storage_product"));
app.use("/storage_poster", express.static("storage_poster"));

// Import my file
const userRouter = require("./api/routes/users");
const productRouter = require("./api/routes/products");
const favoriteRouter = require("./api/routes/favorites");
const cartRouter = require("./api/routes/carts");
const historyRouter = require("./api/routes/history");
const reviewRouter = require("./api/routes/review");
const posterRouter = require("./api/routes/posters");
const addressRouter = require("./api/routes/address");
const orderRouter = require("./api/routes/orders");
const sizeRouter = require("./api/routes/size");
const colorRouter = require("./api/routes/color");
const categoryRouter = require("./api/routes/category");

const port = 5000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Use methods from my file
app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/favorites", favoriteRouter);
app.use("/carts", cartRouter);
app.use("/history", historyRouter);
app.use("/review", reviewRouter);
app.use("/posters", posterRouter);
app.use("/address", addressRouter);
app.use("/orders", orderRouter);
app.use("/api/size", sizeRouter);
app.use("/api/color", colorRouter);
app.use("/api/category", categoryRouter);

// Make my server work on port 3000 and listen when user use it
app.listen(port, () => console.log("Server Started"));
