import React from "react";

// Local Components
import { CardTitle, InputWrapper } from ".";

// Assets
import personIcon from "../assets/icon-person.svg";

export const PeopleNumber = () => {
  const [amount, setAmount] = React.useState("");

  const handleChange = (e) => {
    setAmount((v) => (e.target.validity.valid ? e.target.value : v));
  };

  return (
    // Markup
    <div className="card__people-number">
      <CardTitle className="card-title-dark">Number of People</CardTitle>
      <InputWrapper
        icon={personIcon}
        alt="Person icon"
        amount={amount}
        handleChange={handleChange}
        placeholder={0}
      />
    </div>
  );
};
