import React, { Component } from "react";
import CityCard from "../city-card/cityCard.component";

class ApiCalls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: props.city,
      openWeatherMapApi: "",
      pixaBayApi: "",
      restCountriesApi: "",
    };
  }

  async fetchAndupdateState({ city }) {
    this.setState({ cityName: city });

    /// **fetch openWeatherMapApi ** /////

    const responseWeather = await fetch(
      `https://react-travel-weather-app-backe.herokuapp.com/openweathermap?city=${city}`
    );
    const weather = await responseWeather.json();
    this.setState({ openWeatherMapApi: weather });

    /// **fetch pixabayApi ** /////
    const responsePixabay = await fetch(
      `https://react-travel-weather-app-backe.herokuapp.com/pixabay?city=${city}`
    );
    const pixabay = await responsePixabay.json();
    this.setState({ pixaBayApi: pixabay });

    /// **fetch RestCountriesApi ** /////

    const responseRestCountriesApi = await fetch(
      `https://react-travel-weather-app-backe.herokuapp.com/restcountries?country_codes=${weather.sys.country}`
    );
    const restCountries = await responseRestCountriesApi.json();
    this.setState({ restCountriesApi: restCountries });

    console.log(this.state);
  }

  componentDidUpdate(prevProps) {
    if (this.props.city !== prevProps.city) {
      this.fetchAndupdateState(this.props);
    }
  }

  render() {
    return (
      <div>
        <CityCard {...this.state} />
      </div>
    );
  }
}
export default ApiCalls;
