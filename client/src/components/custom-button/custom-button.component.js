import React from "react";

import "./custom-button.styles.scss";

/**
 * CustomButton: a custome button to be reused in the website
 * using CustomButton will save the styles workers and make it centralized
 */

const CustomButton = ({ children, ...otherProps }) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
