import React from "react";

// Local Components
import { Bill, Tips, PeopleNumber } from ".";

export const Card = () => {
  return (
    <div className="card">
      <Bill />
      <Tips />
      <PeopleNumber />
    </div>
  );
};
