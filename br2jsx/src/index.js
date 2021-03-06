import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import BR2JSX from "./BR2JSX";
import reportWebVitals from "./reportWebVitals";

let text = "первый<BR/>второй<br/>третий<br />последний";

ReactDOM.render(
  <React.StrictMode>
    <BR2JSX text={text} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
