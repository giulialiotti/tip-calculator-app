import React from "react";

// Context
import { TotalContext } from "../context/TotalContext";

// Local Components
import { CardTitle, ButtonPrimary } from ".";

export const TotalCard = () => {
  const { getTotalAmount, getTipAmount, resetAmounts } =
    React.useContext(TotalContext);

  const totalAmount = getTotalAmount();

  return (
    <div className="card__total-card">
      <div>
        <ResultWrapper text="Tip Amount" total={getTipAmount()} />
        <ResultWrapper text="Total" total={totalAmount} />
      </div>
      <ButtonPrimary
        handleClick={resetAmounts}
        disabled={totalAmount === "0.00" ? true : false}
      >
        RESET
      </ButtonPrimary>
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
