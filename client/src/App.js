import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/homePage/homePage";
import Statistics from "./pages/statistics/statistics";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/statistics" component={Statistics}></Route>
        <Route component={() => <div>404 Not found</div>} />
      </Switch>
    </div>
  );
};

export default App;
