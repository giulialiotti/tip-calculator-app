import React from "react";

import { CardTitle, ButtonPrimary } from ".";

export const Tips = () => {
  const tips = ["5%", "10%", "15%", "25%", "50%"];

  return (
    <div className="card__tip">
      <CardTitle className="card-title-dark">Select Tip %</CardTitle>
      <ButtonsWrapper tips={tips} />
    </div>
  );
};

const ButtonsWrapper = ({ tips }) => (
  <div className="card__tip__buttons-wrapper">
    {tips.map((tip) => (
      <ButtonPrimary key={tip}>{tip}</ButtonPrimary>
    ))}
  </div>
);
