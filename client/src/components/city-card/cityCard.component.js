import React from "react";
import Card from "../custom-card/custom-card.component";
import "./cityCard.styles.scss";
const CityCard = ({
  cityName,
  cityApiOpenWeatherMap,
  cityApiPixaBay,
  cityApiRestCountries,
}) => {
  return (
    <Card className="city-card">
      <div className="glass">
        <div className="card-head">
          <h2 className="results">${cityName}</h2>
        </div>
        <div className="trip-data-div">
          <div className="trip-data-text">
            <h3>
              Here are the details for your trip to: <strong>{cityName}</strong>
            </h3>
            <p>
              The temperature is: {weatherbit.temp} with max:{" "}
              {weatherbit.max_temp} and min: {weatherbit.low_temp}
            </p>
            <p>
              Enjoy your stay in: {geonames.countryName} and dont forget to have
              some {restcountries.currencies[0].name} with you it's their
              currencies.
            </p>
          </div>
        </div>
        <img className="img-flage" src={restcountries.flag} alt="flag" />
        <div className="img-pixabay-div">
          <img
            className="img-pixabay"
            src={randomImg.webformatURL}
            alt={randomImg.tags}
          />
        </div>
      </div>
    </Card>
  );
};

export default CityCard;
