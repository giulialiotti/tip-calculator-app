import React from "react";

// Context
import { TotalContext } from "../context/TotalContext";

// Local Components
import { CardTitle, ButtonPrimary, InputWrapper } from ".";

export const Tips = () => {
  const tips = [5, 10, 15, 25, 50];

  return (
    <div className="card__tip">
      <CardTitle className="card-title-dark">Select Tip %</CardTitle>
      <ButtonsWrapper tips={tips} />
    </div>
  );
};

const ButtonsWrapper = ({ tips }) => {
  const { amounts, setAmounts, customTip, setCustomTip } =
    React.useContext(TotalContext);

  // Set selected tip value
  const setTipAmount = (value) =>
    setAmounts((prevState) => {
      return { ...prevState, tip: value };
    });

  // Store custom tip from input event
  const handleChange = (e) => {
    const value = e.target.validity.valid ? e.target.value : amounts.tip;
    setCustomTip(e.target.value);
    setTipAmount(value);
  };

  return (
    <div className="card__tip__buttons-wrapper">
      {tips.map((tip) => (
        <ButtonPrimary
          key={tip}
          className={amounts.tip === tip ? "active" : ""}
          handleClick={() => setTipAmount(tip)}
        >
          {tip}%
        </ButtonPrimary>
      ))}
      <InputWrapper
        className="tips__input-wrapper"
        amount={customTip === amounts.tip ? customTip : ""}
        handleChange={handleChange}
        placeholder="Custom"
      />
    </div>
  );
};
