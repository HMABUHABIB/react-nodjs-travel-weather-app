import React from "react";

import SearchBox from "../../components/search-box/searchBox.component";
import ApiCalls from "../../components/api-calls/api-calls.component";
import CustomCard from "../../components/custom-card/custom-card.component";
import updateLocalStorage from "../wordcloud/updateLocalStroge";

/**
 * The Home Page react class is imported from the main App
 * The class works as the home page for the website
 * This class contain of the react component (SearchBox,ApiCalls,Card,updateLocalStorage)
 */

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { city: "" };
  }
  /*
  // handleCityChange used to update city name via setState and then send the city to updateLocalStorage to save it the Local Storage
  */
  handleCityChange = (newCity) => {
    this.setState({ city: newCity });
    updateLocalStorage(newCity);
  };

  render() {
    /**
     * Card: Component used to add styles to children inside it
     * SearchBox: Component used to display the form to the user and handleCityChange used to update the city name from outside the HomePage class
     * ApiCalls: Component will recive name of the city as props
     */

    return (
      <div className="App">
        <CustomCard>
          <SearchBox handleCityChange={this.handleCityChange} />
        </CustomCard>
        <ApiCalls {...this.state} />
      </div>
    );
  }
}

export default HomePage;
