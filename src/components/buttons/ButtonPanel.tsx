import React from "react";
import "./styles/ButtonPanel.css";
import ACButton from "./ACButton";
import CalcButton from "./CalcButton";
import EqualsButton from "./EqualsButton";
import { INumberProvider } from "@components/providers/NumberProvider";

interface ButtonsPanelProps {
  context: React.Context<INumberProvider>,
}

const ButtonsPanel: React.FC<ButtonsPanelProps> = ({context}) => {
  return (
    <div className="component-button-panel">
      <div>
        <ACButton context={context} />
        <CalcButton buttonText="+/-" context={context} />
        <CalcButton buttonText="%" context={context} />
        <CalcButton buttonText="÷" context={context} extraClass={["orange"]} />
      </div>
      <div>
        <CalcButton buttonText="7" context={context} />
        <CalcButton buttonText="8" context={context} />
        <CalcButton buttonText="9" context={context} />
        <CalcButton buttonText="x" context={context} />
      </div>
      <div>
        <CalcButton buttonText="4" context={context} />
        <CalcButton buttonText="5" context={context} />
        <CalcButton buttonText="6" context={context} />
        <CalcButton buttonText="-" context={context} />
      </div>
      <div>
        <CalcButton buttonText="1" context={context} />
        <CalcButton buttonText="2" context={context} />
        <CalcButton buttonText="3" context={context} />
        <CalcButton buttonText="+" context={context} />
      </div>
      <div>
        <CalcButton buttonText="0" context={context} extraClass={["wide"]} />
        <CalcButton buttonText="." context={context} />
        <EqualsButton context={context} />
      </div>
    </div>
  );
};

export default ButtonsPanel;