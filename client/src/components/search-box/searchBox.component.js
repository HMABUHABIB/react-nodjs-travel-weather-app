import React, { useState } from "react";
import nameOfRandomeCity from "./randomCities";
import CustomButton from "../custom-button/custom-button.component";

import "./searchBox.styles.scss";

/**
 * SearchBox: react function component used to get the city name from the user using 2 ways
 * 1) via the input field
 * 2) via feeling lucky option
 * A ftar having the city name from user the component will pass the city to the parent component
 */

const SearchBox = (props) => {
  const [searchCity, updateSearchCity] = useState("");

  //onSubmitHandler: used to pass the city to the parent component via handleCityChange

  const onSubmitHandler = () => {
    if (searchCity === "") {
      alert("City field cannot be empty");
    } else {
      props.handleCityChange(searchCity);
    }
    updateSearchCity("");
  };

  //onClickHandlerRandomCity: used to pass a Random City name to the parent component via handleCityChange

  const onClickHandlerRandomCity = () => {
    props.handleCityChange(nameOfRandomeCity());
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
