import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";

/**
 * Header: react function component used navigate between the website pages
 * The component have till now to links one to Home page and other one to Wordcloud page
 */

const Header = () => {
  return (
    <div className="header">
      <div className="options">
        <Link className="option" to="/">
          Home
        </Link>
        <Link className="option" to="/wordcloud">
          Wordcloud
        </Link>
      </div>
    </div>
  );
};

export default Header;
