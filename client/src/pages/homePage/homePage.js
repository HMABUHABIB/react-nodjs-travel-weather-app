import React from "react";

import SearchBox from "../../components/search-box/searchBox.component";
import ApiCalls from "../../components/api-calls/api-calls.component";
import Card from "../../components/custom-card/custom-card.component";
import updateLocalStorage from "../wordcloud/updateLocalStroge";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { city: "" };
  }

  handleCityChange = (newCity) => {
    this.setState({ city: newCity });
    updateLocalStorage(newCity);
  };

  render() {
    return (
      <div className="App">
        <Card>
          <SearchBox handleCityChange={this.handleCityChange} />
        </Card>
        <ApiCalls {...this.state} />
      </div>
    );
  }
}

export default HomePage;
