import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/homePage/homePage";
import Wordcloud from "./pages/wordcloud/wordcloud";
import "./App.css";

/*
App => react function component used to render (Header,HomePage,Wordcloud)
The App use Switch and Route to navigate between the pages in the website (HomePage,Wordcloud)
*/

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/wordcloud" component={Wordcloud}></Route>
        <Route component={() => <div>404 Not found</div>} />
      </Switch>
    </div>
  );
};

export default App;
