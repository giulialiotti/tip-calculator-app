import React from "react";

// Local Components
import { CardTitle, ButtonPrimary } from ".";

export const TotalCard = () => {
  return (
    <div className="card__total-card">
      <div>
        <ResultWrapper text="Tip Amount" total="0.00" />
        <ResultWrapper text="Total" total="0.00" />
      </div>
      <ButtonPrimary>RESET</ButtonPrimary>
    </div>
  );
};

const ResultWrapper = ({ text, total }) => (
  <div className="total-card__result-wrapper flex-wrapper">
    <ResultText text={text} />
    <p>${total}</p>
  </div>
);

const ResultText = ({ text }) => (
  <div className="result-wrapper__text">
    <CardTitle className="card-title-light">{text}</CardTitle>
    <p>/ person</p>
  </div>
);
