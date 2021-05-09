import React from "react";
import "./custom-card.styles.scss";

const Card = (props) => {
  return <div className="card">{props.children}</div>;
};

export default Card;
