import React from "react";

export const ButtonPrimary = ({
  children,
  className,
  handleClick,
  ...props
}) => {
  return (
    <button
      className={`button-primary ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};
