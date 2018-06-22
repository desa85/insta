import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Checkin from "./checkin.js";
import Users from "./Users.js";



ReactDOM.render(
		<Router>
				<Route path = "/" component = {Checkin} />
				<Route path = "/users" component = {Users} />
			
		</Router>,
		document.getElementById("root"))


