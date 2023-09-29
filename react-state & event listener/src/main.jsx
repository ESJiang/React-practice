import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import AppClass from "./app/AppClass";
import AppInput from "./app/AppInput";
import AppArray from "./app/AppArray";
import AppUseEffect from "./app/AppUseEffect";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
        <AppClass />
        <AppInput />
        <AppArray />
        <AppUseEffect />
    </React.StrictMode>
);
