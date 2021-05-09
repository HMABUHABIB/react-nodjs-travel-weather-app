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
        <Card>
          <div className="box-shadow-radius card-head">
            <h2>{cityName}</h2>
          </div>
          <div className="trip-data-div">
            <div className="box-shadow-radius trip-data-text">
              <p>
                Here are the details for your trip to:{" "}
                <strong>{cityName}</strong>
              </p>
              <p>
                The temperature is: {openWeatherMapApi.main.temp} with max:
                {openWeatherMapApi.main.temp_max} and min:{" "}
                {openWeatherMapApi.main.temp_min}
                <br></br>
                Enjoy your stay in {restCountriesApi.name} and dont forget to
                have some {restCountriesApi.currencies[0].name} with you it's
                their currencies.
              </p>
            </div>
            <img
              className="box-shadow-radius img-flage"
              src={restCountriesApi.flag}
              alt={`Flage of ${restCountriesApi.name} `}
            />
          </div>

          <div className="img-pixabay-div">
            <img
              className="box-shadow-radius img-pixabay"
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
