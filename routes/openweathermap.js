const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=${process.env.API_KEY_OPEN_WEATHER_MAP}`
    );
    console.log(response);
    res.send(response);
  } catch (error) {
    console.log("openweathermap error");
    res.send(error);
  }
});

module.exports = router;
