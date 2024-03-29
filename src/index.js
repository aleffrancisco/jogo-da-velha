import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/settings/colors.css";
import "./styles/settings/spacing.css";
import "./styles/settings/size.css";
import "./styles/generic/reset.css";
import "./styles/elements/base.css";
import "normalize.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
