import React from "react";

import Header from "./components/header/header.component";
import SearchBox from "./components/search-box/searchBox.component";
import CityCard from "./components/city-card/cityCard.component";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { city: "" };
  }

  handleCityChange = (newCity) => {
    this.setState({ city: newCity });
  };

  render() {
    const { city } = this.state;
    return (
      <div className="App">
        <Header />
        <SearchBox handleCityChange={this.handleCityChange} />
        {city}
        <CityCard></CityCard>
      </div>
    );
  }
}

export default App;
