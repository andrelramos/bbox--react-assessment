import React, { useContext } from "react";
import ButtonsPanel from "@components/buttons/ButtonPanel";
import Display from "@components/displays/Display";
import "@components/app/styles/App.css";
import { INumberProvider, NumberContext } from "@components/providers/NumberProvider";

const App: React.FC = () => {
  const {displayValue} = useContext<INumberProvider>(NumberContext);

  return (
    <div className="component-app">
      <Display value={displayValue} />
      <ButtonsPanel context={NumberContext} />
    </div>
  );
};

export default App;
