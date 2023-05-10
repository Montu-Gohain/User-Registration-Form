const express = require("express");
require("dotenv").config();
const cors = require("cors");
const createHttpError = require("http-errors");
require("./helper/init_mongo")();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send({
    success: true,
    msg: "Your Express Server is running",
  });
});

// Mounting user_routes in the app.

app.use("/api/users", require("./route/user_routes"));

// Handling errors and Not found page.

app.use("*/", (req, res, next) => {
  return next(createHttpError.NotFound("Page not found..."));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    msg: err.message,
  });
});

const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
