import React from "react";

export const TotalContext = React.createContext();

export const TotalProvider = ({ children }) => {
  // State to store input value of bill, selected tip and number of people
  const [amounts, setAmounts] = React.useState({
    bill: "",
    tip: "",
    people: "",
  });
  // State to store input value for custom tip
  const [customTip, setCustomTip] = React.useState("");

  const cero = "0.00";
  const isDataCero = amounts.bill === "" || amounts.people === "";

  // Calculate amount to pay from total check per person
  const getTotalAmount = () => {
    const total = (amounts.bill / amounts.people).toFixed(2);

    if (isDataCero) {
      return cero;
    } else {
      return total;
    }
  };

  // Calculate amount to tip per person
  const getTipAmount = () => {
    if (isDataCero) return cero;

    const totalTip = (amounts.tip * amounts.bill) / 100;
    const tipPerPerson = (totalTip / amounts.people).toFixed(2);

    return tipPerPerson;
  };

  // Reset bill, number of people and tip (selected from button or custom)
  const resetAmounts = () => {
    setCustomTip("");
    setAmounts({
      bill: "",
      tip: "",
      people: "",
    });
  };

  return (
    <TotalContext.Provider
      value={{
        amounts,
        setAmounts,
        getTotalAmount,
        getTipAmount,
        resetAmounts,
        customTip,
        setCustomTip,
      }}
    >
      {children}
    </TotalContext.Provider>
  );
};
