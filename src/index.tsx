import { AiniProvider, defaultDarkTheme, IAiniTheme } from "@tirkai/aini";
import Color from "color";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// const lightTheme = {};
const DEFAULT_COLOR = "#666666";
const PRIMARY_COLOR = "#546de5";
const DANGER_COLOR = "#c0392b";
const SUCCESS_COLOR = "#27ae60";
const DISABLE_COLOR = "#555";

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
        ghost: {
            idle: DISABLE_COLOR,
            pulse: DEFAULT_COLOR,
        },
    },
};

ReactDOM.render(
    <React.StrictMode>
        <AiniProvider theme={defaultDarkTheme}>
            <App />
        </AiniProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
