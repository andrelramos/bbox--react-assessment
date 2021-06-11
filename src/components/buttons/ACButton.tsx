import { useContext } from "react";
import "@components/buttons/styles/Button.css";
import { INumberProvider } from "@components/providers/NumberProvider";

interface ACButtonProps {
  context: React.Context<INumberProvider>,
}

const ACButton: React.FC<ACButtonProps> = ({context}) => {
  const {setDisplayValue} = useContext<INumberProvider>(context);

  const onClick = () => {
    setDisplayValue("0");
  }

  return (
    <div className="component-button">
      <button onClick={onClick}>AC</button>
    </div>
  );
}

export default ACButton;