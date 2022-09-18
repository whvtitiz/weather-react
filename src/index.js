import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Weather from "./Weather";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Weather defaultCity="Portland" />

    <footer>
      <a href="https://github.com/whvtitiz/weather-react.git" rel="noreferrer">
        Open-source code on GitHub
      </a>
      &nbsp;&&nbsp;
      <a href="https://gleeful-gingersnap-53cb24.netlify.app/" rel="noreferrer">
        hosted on Netlify
      </a>
      &nbsp;coded by Whitney Wiles
    </footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
