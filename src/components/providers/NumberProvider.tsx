import React, { useState } from 'react';

export interface INumberProvider {
  displayValue: string;
  setDisplayValue: (value: string) => void | ((fn: (value: string) => string) => void);
}

export const NumberContext = React.createContext({} as INumberProvider);

const NumberProvider = (props: any) => {
  const [displayValue, setDisplayValue] = useState("0");
 
  return (
    <NumberContext.Provider
      value={{
        displayValue,
        setDisplayValue,
      }}
    >
      {props.children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;