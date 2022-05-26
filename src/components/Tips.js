import React from "react";

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
  const [amount, setAmount] = React.useState('');

  const handleChange = (e) => {
    setAmount((v) => (e.target.validity.valid ? e.target.value : v));
  };

  return (
    <div className="card__tip__buttons-wrapper">
      {tips.map((tip) => (
        <ButtonPrimary key={tip}>{tip}%</ButtonPrimary>
      ))}
      <InputWrapper
        className="tips__input-wrapper"
        amount={amount}
        handleChange={handleChange}
        placeholder="Custom"
      />
    </div>
  );
};
