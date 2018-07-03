import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import App from "./app.js";
import Checkin from "./checkin.js";
import Users from "./Users.js";
import UserName from "./UserName.js";
import "./style.css";

const history = createBrowserHistory();

ReactDOM.render(
		<div>
			
			<Router history = {history}>
					
					<Route path = "/"  component = {App}>
						<div>
						<Route path = "checkin" component = {Checkin} />
						<Route path = "/users" component = {Users} />
						<Route path = "/users/:userName" component = {UserName} />
						</div>
					</Route>
			</Router>
		</div>,
		document.getElementById("root"))


