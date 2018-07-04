import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import App from "./app.js";
import "./style.css";
const history = createBrowserHistory();
ReactDOM.render(
		<App />,
		document.getElementById("root"))


