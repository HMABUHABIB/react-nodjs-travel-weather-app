const express = require("express");
const router = express.Router();
const axios = require("axios");

/**
 * Get api => to get the data from (Pixabay) website
 * process.env.API_KEY_PIXABAY => The API key is hidden to the outside world
 * The API will use the city name as a query and answer with photos from this city as an Array
 * **/

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?q=${req.query.city}&key=${process.env.API_KEY_PIXABAY}&image_type=photo`
    );
    res.send(response.data);
  } catch (error) {
    console.log("pixabay error");
    res.send(error);
  }
});

module.exports = router;
