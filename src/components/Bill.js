import React from "react";

// Context
import { TotalContext } from "../context/TotalContext";

// Local Components
import { CardTitle, InputWrapper } from ".";

// Assets
import dollarIcon from "../assets/icon-dollar.svg";

export const Bill = () => {
  const { amounts, setAmounts } = React.useContext(TotalContext);

  // Store bill amount from input event
  const handleChange = (e) => {
    const value = e.target.validity.valid ? e.target.value : amounts.bill;

    setAmounts((prevState) => {
      return { ...prevState, bill: value };
    });
  };

  return (
    // Markup
    <div className="card__bill">
      <CardTitle className="card-title-dark">Bill</CardTitle>
      <InputWrapper
        icon={dollarIcon}
        alt="Dollar icon"
        amount={amounts.bill}
        handleChange={handleChange}
        placeholder={0}
      />
    </div>
  );
};
