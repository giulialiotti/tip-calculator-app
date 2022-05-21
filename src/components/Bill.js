import React from "react";

// Local Components
import { CardTitle } from ".";

// Assets
import dollarIcon from "../assets/icon-dollar.svg";

export const Bill = () => {
  return (
    // Markup
    <div className="card__bill">
      <CardTitle className="card-title-dark">Bill</CardTitle>
      <AmoutWrapper amount={142.55} />
    </div>
  );
};

// Elements

const AmoutWrapper = ({ amount }) => (
  <div className="card__bill__amout vector-and-number-wrapper flex-wrapper">
    <div className="vector-wrapper">
      <img src={dollarIcon} alt="Dollar icon" />
    </div>
    <p>{amount}</p>
  </div>
);
