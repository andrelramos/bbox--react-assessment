import React from "react";
import ReactDOM from "react-dom";
import App from "@components/app/App";
import NumberProvider from "@components/providers/NumberProvider";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <NumberProvider>
      <App />
    </NumberProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
