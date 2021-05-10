var createError = require("http-errors");
var express = require("express");
var path = require("path");
const expressLayouts = require("express-ejs-layouts");

require("dotenv").config();

const indexRouter = require("./routes/index");
const openweathermap = require("./routes/openweathermap");
const pixabay = require("./routes/pixabay");
const restcountries = require("./routes/restcountries");

var app = express();

// Cors for cross origin allowance
const cors = require("cors");
//app.use(cors());

var allowedOrigins = [
  "http://localhost:3000",
  "https://react-nodjs-travel-weather-app.herokuapp.com/",
];
app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

// view engine setup

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.json());

app.use("/main", indexRouter);
app.use("/openweathermap", openweathermap);
app.use("/pixabay", pixabay);
app.use("/restcountries", restcountries);

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

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
