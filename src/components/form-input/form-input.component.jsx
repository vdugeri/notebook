import React from "react";
import PropTypes from "prop-types";
import "./form-input.styles.scss";

const FormInput = ({ label, handleChange, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

FormInput.propTypes = {
  value: PropTypes.any.isRequired
};

export default FormInput;
