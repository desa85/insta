import React, {Component} from "react"
import { connect } from "react-redux"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import Checkin from "./checkin.js";
import Users from "./Users.js";
import UserName from "./UserName.js";
import Routes from "./Routes.js";
const history = createBrowserHistory();
class App extends Component{
	constructor(props){
		super(props)
		this.transition = () => {history.push("/users")}
		this.state = {
			user: JSON.parse(localStorage.getItem("users"))
		}
	}

	changeData = (obj) => {
		var mess = "";
		this.state.user.forEach(function(iteam){
			if((iteam.login == obj.login) || (iteam.email == obj.email)){
				
				mess = "neproshlo"
			}
		})
		if(mess == "neproshlo"){
			return mess
		}
		this.setState({
			user: [...this.state.user, obj]
		})
		localStorage.setItem("users", JSON.stringify([...this.state.user, obj]))
		return "vsenorm"
			}

	render(){

		return(
			<Router history = {history}>	
				
				<div>
					<Route path = "/"  component = {Routes} />
					<Route path = "/checkin" render = {() => <Checkin changeData = {this.changeData } transition = {this.transition} path = {this.state.path} />} />
					<Route exact path = "/users" render = {() => <Users user = {this.state.user} />} />
					<Route  path = "/users/:userName" component = {UserName} />
				</div>
			</Router>
				
			)
	}
}
export default App