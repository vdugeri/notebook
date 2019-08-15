import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ label, handleChange, ...otherProps }) => (
  <div className="form-input">
    {label ? <label className="form-input__label">{label}</label> : ""}
    <input onChange={handleChange} {...otherProps} />
  </div>
);

export default FormInput;
