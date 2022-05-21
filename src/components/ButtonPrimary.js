import React from "react";

export const ButtonPrimary = ({ children, handleClick }) => {
  return (
    <button className="button-primary" onClick={handleClick}>
      {children}
    </button>
  );
};
