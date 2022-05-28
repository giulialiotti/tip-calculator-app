import React from "react";

export const InputWrapper = ({
  className,
  inputClassName,
  icon,
  alt,
  amount,
  handleChange,
  placeholder,
}) => (
  <div className={`input-wrapper flex-wrapper ${className}`}>
    {icon && (
      <div className="vector-wrapper">
        <img src={icon} alt={alt} />
      </div>
    )}
    <input
      className={inputClassName}
      type="text"
      pattern="[0-9-.]*"
      value={amount}
      onChange={(e) => handleChange(e)}
      placeholder={placeholder}
    />
  </div>
);
