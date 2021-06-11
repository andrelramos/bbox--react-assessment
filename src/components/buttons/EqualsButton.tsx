import { evaluate } from "mathjs";
import { useContext } from "react";
import "@components/buttons/styles/Button.css";
import { INumberProvider } from "@components/providers/NumberProvider";

interface EqualsButtonProps {
  context: React.Context<INumberProvider>,
}

const EqualsButton: React.FC<EqualsButtonProps> = ({context}) => {
  const {displayValue, setDisplayValue} = useContext<INumberProvider>(context);

  const onClick = () => {
    const replacedValue: string | undefined = displayValue?.replace("x", "*").replace("÷", "/");

    if(replacedValue) {
      console.log(replacedValue);
      const value: number = evaluate(replacedValue);
      setDisplayValue(value.toString());
    }
  }

  return (
    <div className="component-button orange">
      <button onClick={onClick}>=</button>
    </div>
  );
}

export default EqualsButton;