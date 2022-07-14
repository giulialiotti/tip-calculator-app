import React from "react";

// Context
import { useCalculationsContext } from "../context/CalculationsContext";

// Local Components
import { CardTitle, ButtonPrimary } from ".";

export const TotalCard = () => {
  const { amounts, getTotalAmount, getTipAmount, resetAmounts } =
    useCalculationsContext();

  const isDisabled =
    amounts.bill === "" && amounts.people === "" && amounts.tip === "";

  return (
    <div className="card__total-card">
      <div>
        <ResultWrapper text="Tip Amount" total={getTipAmount()} />
        <ResultWrapper text="Total" total={getTotalAmount()} />
      </div>
      <ButtonPrimary
        handleClick={resetAmounts}
        disabled={isDisabled ? true : false}
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
