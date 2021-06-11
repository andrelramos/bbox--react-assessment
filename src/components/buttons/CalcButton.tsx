import React, { useContext } from "react";
import { INumberProvider } from "@components/providers/NumberProvider";
import "@components/buttons/styles/Button.css";

interface CalcButtonProps {
  buttonText: string;
  context: React.Context<INumberProvider>,
  extraClass?: string[];
}

const CalcButton: React.FC<CalcButtonProps> = ({buttonText, context, extraClass = undefined}) => {
  const {displayValue, setDisplayValue} = useContext<INumberProvider>(context);

  const onClick = () => {
    if (!displayValue || displayValue === "0") setDisplayValue(buttonText);
    else setDisplayValue(`${displayValue}${buttonText}`);
  }

  return (
    <div className={`component-button ${extraClass ? extraClass.join(" ") : ""}`}>
      <button onClick={onClick}>{buttonText}</button>
    </div>
  );
}

export default CalcButton;