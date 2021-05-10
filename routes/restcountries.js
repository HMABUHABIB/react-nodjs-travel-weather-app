const express = require("express");
const router = express.Router();
const axios = require("axios");

/**
 * Get api => to get the data from (Restcountries) website
 * No need to use key for this API
 * The API will use the country code as a query and answer with information about the country like the flag, currency, and more.
 * **/

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      `https://restcountries.eu/rest/v2/alpha/${req.query.country_codes}`
    );

    res.send(response.data);
  } catch (error) {
    console.log("restcountries error");
    res.send(error);
  }
});

module.exports = router;
