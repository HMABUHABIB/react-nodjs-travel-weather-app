import React, { Component } from "react";
import CityCard from "../city-card/cityCard.component";

/**
 * ApiCalls: React class component works as connector between the search component and the display component (CityCard)
 * 1) The Component works after receiving the city name from the component (search) via props
 * 2) Then componentDidUpdate will run => inside it we will check if the new city name is !== past city name
 * 3) if new city name is !== past city name => The fetchAndupdateState function will run otherwise nothing will happen
 *  */

class ApiCalls extends Component {
  constructor(props) {
    super(props);
    /*
    // This state used to save the object of (city name that have been recived from search component and the recived data from the APIs)
    */
    this.state = {
      cityName: props.city,
      openWeatherMapApi: "",
      pixaBayApi: "",
      restCountriesApi: "",
    };
  }
  /**
   * fetchAndupdateState: used to fetch the data from the backend using the received city name then use it as query to call the listed down APIs
   * The function used (try) and (catch) to prevent the app from crashing
   */

  async fetchAndupdateState({ city }) {
    /// ** fetch openWeatherMapApi ** using city name as query /////
    try {
      const responseWeather = await fetch(
        `https://react-nodjs-travel-weather-app.herokuapp.com/openweathermap?city=${city}`
      );
      const weather = await responseWeather.json();
      this.setState({ openWeatherMapApi: weather });
      /*
      /// ** fetch pixabayApi ** using city name as query /////
      */
      const responsePixabay = await fetch(
        `https://react-nodjs-travel-weather-app.herokuapp.com/pixabay?city=${city}`
      );
      const pixabay = await responsePixabay.json();
      /*
      /// ** fetch RestCountriesApi ** using the country codes as query /////
      */
      const responseRestCountriesApi = await fetch(
        `https://react-nodjs-travel-weather-app.herokuapp.com/restcountries?country_codes=${weather.sys.country}`
      );
      const restCountries = await responseRestCountriesApi.json();
      /*
      // After fetching the data from all the APIs => this.setState will run to update the State with the new received data
      */
      this.setState({
        cityName: city,
        openWeatherMapApi: { ...weather },
        pixaBayApi: { ...pixabay },
        restCountriesApi: { ...restCountries },
      });
    } catch (error) {
      /*
      // catch: used to catch any error during fetching the data from the APIs for example if the city not found
      */
      alert("Sorry i'm not able to find this city for you");
      this.setState({
        cityName: "",
        openWeatherMapApi: "",
        pixaBayApi: "",
        restCountriesApi: "",
      });
    }
  }

  // componentDidUpdate: This will run every time when the component get updated
  componentDidUpdate(prevProps) {
    if (this.props.city !== prevProps.city) {
      this.fetchAndupdateState(this.props);
    }
  }
  /*
  // The ApiCalls component will re-render every time when state is updated => then pass the new state to CityCard component via props.
  */
  render() {
    return <CityCard {...this.state}></CityCard>;
  }
}
export default ApiCalls;
