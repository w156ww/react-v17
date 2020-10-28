import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App.jsx";
import "./index.css";
import "./style/common/flex-common.scss";
import "./style/rest.scss";
import { Provider } from "react-redux";
import store from "./pages/store/index.js";

const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);
