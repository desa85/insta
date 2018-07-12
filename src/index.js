import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import App from "./app.js";
import "./style.css";
const users = [ 
					{id: 0 ,name: "Витя Акимов", email: "lordpovel@mail.ru", login: "imperator", password: "3570202"}, 
					{id: 1 ,name: "Паша Неразберихин", email: "lexa@yandex.ru", login: "anarhia", password: "12345"}, 
					{id: 2 ,name: "Сережa Артемов", email: "jesus@gmail.com", login: "religia", password: "gospod"}];
if(!localStorage.getItem("users")){
	localStorage.setItem("users", JSON.stringify(users));
}

console.log(localStorage.getItem("users"));
const history = createBrowserHistory();
ReactDOM.render(
		<App />,
		document.getElementById("root"))


