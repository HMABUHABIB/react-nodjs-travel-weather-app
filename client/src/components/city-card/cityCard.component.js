import React, { useState } from "react";
import Card from "../custom-card/custom-card.component";

import "./cityCard.styles.scss";

const CityCard = ({
  cityName,
  pixaBayApi,
  openWeatherMapApi,
  restCountriesApi,
}) => {
  const [imgNumber, updateImgNumber] = useState(0);

  const onClickRightHandle = () => {
    if (imgNumber < pixaBayApi.hits.length - 1) {
      updateImgNumber(imgNumber + 1);
    } else {
      updateImgNumber(0);
    }
  };
  const onClickLeftHandle = () => {
    if (imgNumber < pixaBayApi.hits.length && imgNumber > 0) {
      updateImgNumber(imgNumber - 1);
    } else {
      updateImgNumber(pixaBayApi.hits.length - 1);
    }
  };

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
            <div className="arrow">
              {" "}
              <svg
                onClick={onClickLeftHandle}
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                className="bi bi-arrow-left-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
              </svg>
              <svg
                onClick={onClickRightHandle}
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                className="bi bi-arrow-right-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
              </svg>{" "}
            </div>
            <img
              className="box-shadow-radius img-pixabay"
              src={pixaBayApi.hits[imgNumber].webformatURL}
              alt={pixaBayApi.hits[imgNumber].tags}
            />
          </div>
        </Card>
      ) : null}
    </div>
  );
};

export default CityCard;
