import React from "react";
import Card from "../custom-card/custom-card.component";
import "./cityCard.styles.scss";
const CityCard = ({
  cityName,
  pixaBayApi,
  openWeatherMapApi,
  restCountriesApi,
}) => {
  return (
    <div>
      {cityName && pixaBayApi && openWeatherMapApi && restCountriesApi ? (
        <Card className="city-card">
          <div className="card-head">
            <h2 className="results">{cityName}</h2>
          </div>
          <div className="trip-data-div">
            <div className="trip-data-text">
              <h3>
                Here are the details for your trip to:{" "}
                <strong>{cityName}</strong>
              </h3>
              <p>
                The temperature is: {openWeatherMapApi.main.temp} with max:
                {openWeatherMapApi.main.temp_max} and min:{" "}
                {openWeatherMapApi.main.temp_min}
              </p>
              <p>
                Enjoy your stay in: {restCountriesApi.name} and dont forget to
                have some {restCountriesApi.currencies[0].name} with you it's
                their currencies.
              </p>
            </div>
            <img
              className="img-flage"
              src={restCountriesApi.flag}
              alt={`Flage of ${restCountriesApi.name} `}
            />
          </div>

          <div className="img-pixabay-div">
            <img
              className="img-pixabay"
              src={pixaBayApi.hits[0].webformatURL}
              alt={pixaBayApi.hits[0].tags}
            />
          </div>
        </Card>
      ) : null}
    </div>
  );
};

export default CityCard;
