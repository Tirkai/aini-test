import Color from "color";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AiniProvider } from "./components/provider/AiniProvider";
import { IAiniTheme } from "./IAiniTheme";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// const lightTheme = {};
const DEFAULT_COLOR = "#555555";
const PRIMARY_COLOR = "#546de5";
const DANGER_COLOR = "#c0392b";
const SUCCESS_COLOR = "#27ae60";

const darkTheme: IAiniTheme = {
    colors: {
        default: {
            idle: DEFAULT_COLOR,
            hover: Color(DEFAULT_COLOR).darken(0.2).toString(),
        },
        primary: {
            idle: PRIMARY_COLOR,
            hover: Color(PRIMARY_COLOR).darken(0.2).toString(),
        },
        danger: {
            idle: DANGER_COLOR,
            hover: Color(DANGER_COLOR).darken(0.2).toString(),
        },
        success: {
            idle: SUCCESS_COLOR,
            hover: Color(SUCCESS_COLOR).darken(0.2).toString(),
        },
    },
};

ReactDOM.render(
    <React.StrictMode>
        <AiniProvider theme={darkTheme}>
            <App />
        </AiniProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
