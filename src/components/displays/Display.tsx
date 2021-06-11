import React from "react";
import "@components/displays/styles/Display.css";

interface Props {
  value: string;
}

const Display: React.FC<Props> = ({ value }) => {
  return (
    <div className="component-display">
      <div>{value}</div>
    </div>
  );
};

export default Display;
