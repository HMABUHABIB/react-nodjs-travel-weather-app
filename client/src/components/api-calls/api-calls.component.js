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
    /// **fetch openWeatherMapApi ** /////
    try {
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

      /// **fetch RestCountriesApi ** /////

      const responseRestCountriesApi = await fetch(
        `https://react-travel-weather-app-backe.herokuapp.com/restcountries?country_codes=${weather.sys.country}`
      );
      const restCountries = await responseRestCountriesApi.json();
      this.setState({
        cityName: city,
        openWeatherMapApi: { ...weather },
        pixaBayApi: { ...pixabay },
        restCountriesApi: { ...restCountries },
      });
    } catch (error) {
      alert("Sorry i'm not able to find this city for you");
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.city !== prevProps.city) {
      this.fetchAndupdateState(this.props);
    }
  }

  render() {
    return <CityCard {...this.state}></CityCard>;
  }
}
export default ApiCalls;
