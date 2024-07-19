import React from "react";
import ReactDOM from "react-dom/client";
import AppuseReducer from "./10-R1S12-10/AppuseReducer";
// import App from "./15-R1S12-15/App";
// import AppuseReducer from "./10-R1S12-10/AppuseReducer";
// import SearchEmail from "./06-R1S12-6/SearchEmail";
export const URI = " https://jsonplaceholder.typicode.com";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AppuseReducer />
    </React.StrictMode>
);
