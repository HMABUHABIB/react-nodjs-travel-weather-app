const express = require("express");
const router = express.Router();
const axios = require("axios");

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
