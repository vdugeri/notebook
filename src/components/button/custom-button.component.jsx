import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ handleClick, label }) => (
  <button type="button" className="custom-button" onClick={handleClick}>
    {label}
  </button>
);

export default CustomButton;
