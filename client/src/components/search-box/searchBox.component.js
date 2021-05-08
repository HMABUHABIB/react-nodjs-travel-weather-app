import React, { useState, useRef, useEffect } from "react";
import nameOfRandomeCity from "./randomCities";

import "./searchBox.styles.scss";

const SearchBox = (poops) => {
  const [searchCity, updateSearchCity] = useState("");

  const onSubmitHandler = () => {
    console.log(searchCity);
    updateSearchCity("");
    poops.handleCityChange(searchCity);
  };

  const onClickHandlerRandomCity = () => {
    console.log(nameOfRandomeCity());
    poops.handleCityChange(nameOfRandomeCity());
  };

  const changeHandler = (event) => {
    updateSearchCity(event.target.value);
  };

  return (
    <div className="SearchBox">
      <form
        onSubmit={(e) => {
          e.preventdefault();
        }}
      >
        <input
          value={searchCity}
          name="city"
          type="text"
          label="city"
          onChange={changeHandler}
          placeholder="Enter your destination"
        ></input>

        <button type="button" onClick={onSubmitHandler}>
          Go ahead
        </button>
        <button type="button" onClick={onClickHandlerRandomCity}>
          I'm Feeling Lucky
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
