import React from "react";

// Context
import { useCalculationsContext } from "../context/CalculationsContext";

// Local Components
import { CardTitle, InputWrapper } from ".";

// Assets
import personIcon from "../assets/icon-person.svg";

export const PeopleNumber = () => {
  const { amounts, setAmounts } = useCalculationsContext();

  const errorValue = amounts.people === "0";

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
      <div className="flex-wrapper">
        <CardTitle className="card-title-dark">Number of People</CardTitle>
        {errorValue && (
          <CardTitle className="data-error-title">Can't be zero</CardTitle>
        )}
      </div>
      <InputWrapper
        icon={personIcon}
        alt="Person icon"
        amount={amounts.people}
        handleChange={handleChange}
        placeholder={0}
        inputClassName={errorValue ? "data-error" : ""}
      />
    </div>
  );
};
