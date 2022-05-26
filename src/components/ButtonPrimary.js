import React from "react";

export const ButtonPrimary = ({ children, className, handleClick }) => {
  return (
    <button className={`button-primary ${className}`} onClick={handleClick}>
      {children}
    </button>
  );
};
