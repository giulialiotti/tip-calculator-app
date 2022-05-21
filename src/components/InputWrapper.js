import React from "react";

export const InputWrapper = ({ icon, alt, amount, handleChange }) => (
  <div className="input-wrapper flex-wrapper">
    <div className="vector-wrapper">
      <img src={icon} alt={alt} />
    </div>
    <input
      type="text"
      pattern="[0-9-.,]*"
      value={amount}
      onChange={(e) => handleChange(e)}
    />
  </div>
);
