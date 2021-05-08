var createError = require("http-errors");
var express = require("express");
var path = require("path");

require("dotenv").config();

const indexRouter = require("./routes/index");
const openweathermap = require("./routes/openweathermap");
const pixabay = require("./routes/pixabay");
const restcountries = require("./routes/restcountries");

var app = express();

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

app.use(express.json());

app.use("/", indexRouter);
app.use("/openweathermap", openweathermap);
app.use("/pixabay", pixabay);
app.use("/restcountries", restcountries);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
app.listen(process.env.PORT || 8081);
