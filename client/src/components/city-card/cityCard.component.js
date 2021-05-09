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
    <div>
      {cityName !== "" ? (
        <Card className="city-card">
          <div className="glass">
            <div className="card-head">
              <h2 className="results">${cityName}</h2>
            </div>
            <div className="trip-data-div">
              <div className="trip-data-text">
                <h3>
                  Here are the details for your trip to:{" "}
                  <strong>{cityName}</strong>
                </h3>
                <p>
                  The temperature is: {cityApiOpenWeatherMap.main.temp} with
                  max: {cityApiOpenWeatherMap.main.max_temp} and min:{" "}
                  {cityApiOpenWeatherMap.main.low_temp}
                </p>
                <p>
                  Enjoy your stay in: {cityApiRestCountries.name} and dont
                  forget to have some {cityApiRestCountries.currencies[0].name}{" "}
                  with you it's their currencies.
                </p>
              </div>
            </div>
            <img
              className="img-flage"
              src={cityApiRestCountries.flag}
              alt="flag"
            />
            <div className="img-pixabay-div">
              <img
                className="img-pixabay"
                src={cityApiPixaBay.hits[0].webformatURL}
                alt={cityApiPixaBay.hits[0].tags}
              />
            </div>
          </div>
        </Card>
      ) : null}
    </div>
  );
};

export default CityCard;
