import React from "react";
import "./custom-card.styles.scss";

/**
 * Card: react function component used as wrapper to give the styles for all the children inserted inside it
 * using CustomCard will save the styles workers and make it centralized
 */

const CustomCard = (props) => {
  return <div className="card">{props.children}</div>;
};

export default CustomCard;
