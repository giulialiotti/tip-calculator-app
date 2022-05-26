import React from "react";

// Context
import { TotalContext } from "../context/TotalContext";

// Local Components
import { CardTitle, InputWrapper } from ".";

// Assets
import personIcon from "../assets/icon-person.svg";

export const PeopleNumber = () => {
  const { amounts, setAmounts } = React.useContext(TotalContext);

  // Store number of people from input event
  const handleChange = (e) => {
    const value = e.target.validity.valid ? e.target.value : amounts.people;

    setAmounts((prevState) => {
      return { ...prevState, people: value };
    });
  };

  return (
    // Markup
    <div className="card__people-number">
      <CardTitle className="card-title-dark">Number of People</CardTitle>
      <InputWrapper
        icon={personIcon}
        alt="Person icon"
        amount={amounts.people}
        handleChange={handleChange}
        placeholder={0}
      />
    </div>
  );
};
