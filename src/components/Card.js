import React from "react";

// Local Components
import { Bill, Tips, PeopleNumber, TotalCard } from ".";

export const Card = () => {
  return (
    <div className="card">
      <div className="card__selectors-wrapper">
        <Bill />
        <Tips />
        <PeopleNumber />
      </div>
      <TotalCard />
    </div>
  );
};
