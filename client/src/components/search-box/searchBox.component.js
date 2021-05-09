import React, { useState } from "react";
import nameOfRandomeCity from "./randomCities";
import CustomButton from "../custom-button/custom-button.compomnent";

import "./searchBox.styles.scss";

const SearchBox = (poops) => {
  const [searchCity, updateSearchCity] = useState("");

  const onSubmitHandler = () => {
    console.log(searchCity);
    updateSearchCity("");
    poops.handleCityChange(searchCity);
  };

  const onClickHandlerRandomCity = () => {
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
          className="city-input"
          value={searchCity}
          name="city"
          type="text"
          label="city"
          onChange={changeHandler}
          placeholder="Enter your destination"
        ></input>

        <CustomButton type="button" onClick={onSubmitHandler}>
          Go ahead
        </CustomButton>
        <CustomButton type="button" onClick={onClickHandlerRandomCity}>
          I'm Feeling Lucky
        </CustomButton>
      </form>
    </div>
  );
};

export default SearchBox;
