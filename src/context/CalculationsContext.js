import React from "react";

export const CalculationsContext = React.createContext();

export const useCalculationsContext = () =>
  React.useContext(CalculationsContext);

export const CalculationsProvider = ({ children }) => {
  // State to store input value of bill, selected tip and number of people
  const [amounts, setAmounts] = React.useState({
    bill: "",
    tip: "",
    people: "",
  });
  // State to store input value for custom tip
  const [customTip, setCustomTip] = React.useState("");

  const shouldNotDisplayResult =
    amounts.bill === "" ||
    amounts.people === "" ||
    amounts.bill === "0" ||
    amounts.people === "0";

  function formatPrice(price) {
    return parseFloat(price || 0).toFixed(2);
  }

  // Calculate amount to pay from total check per person
  const getTotalAmount = () => {
    if (shouldNotDisplayResult) return formatPrice(0);

    return formatPrice(amounts.bill / amounts.people);
  };

  // Calculate amount to tip per person
  const getTipAmount = () => {
    if (shouldNotDisplayResult) return formatPrice(0);

    const totalTip = (amounts.tip * amounts.bill) / 100;
    const tipPerPerson = totalTip / amounts.people;

    return formatPrice(tipPerPerson);
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
    <CalculationsContext.Provider
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
    </CalculationsContext.Provider>
  );
};
