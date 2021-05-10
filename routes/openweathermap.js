const express = require("express");
const router = express.Router();
const axios = require("axios");
/**
 * Get api => to get the data from (Openweathermap) website
 * API_KEY_OPEN_WEATHER_MAP => The API key is hidden to the outside world
 * The API will use the city name as a query and answer with the weather data for this city or with the city not found
 * **/

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=${process.env.API_KEY_OPEN_WEATHER_MAP}&units=metric`
    );
    res.send(response.data);
  } catch (error) {
    console.log("openweathermap error");
    res.send(error);
  }
});

module.exports = router;
