import React from "react";

// Local Components
import { CardTitle, InputWrapper } from ".";

// Assets
import dollarIcon from "../assets/icon-dollar.svg";

export const Bill = () => {
  const [amount, setAmount] = React.useState('');

  const handleChange = (e) => {
    setAmount((v) => (e.target.validity.valid ? e.target.value : v));
  };

  return (
    // Markup
    <div className="card__bill">
      <CardTitle className="card-title-dark">Bill</CardTitle>
      <InputWrapper
        icon={dollarIcon}
        alt="Dollar icon"
        amount={amount}
        handleChange={handleChange}
        placeholder={0}
      />
    </div>
  );
};
