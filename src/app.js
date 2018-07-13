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
	removeUser = (user) => {
		let arr = this.state.user;	
		arr.forEach((item, i) => {
			if(user == item.id){
				arr.splice(arr.indexOf(arr[i]), 1)
				localStorage.setItem("users", JSON.stringify(arr))
				this.setState({user: arr})
			}
		} )
		
	}
	changeUser = (user) => {
		let mess = ""
		let arr = this.state.user;
		arr.forEach((item, i) => {
			if(((user.login == item.login) || (user.email == item.email)) && (user.id != item.id)){
				mess = "err"
			}
			
		})
		if(mess == "err") {return mess}
		arr.forEach((item, i) => {
			if(user.id == item.id){
				arr[i].name = user.name;
				arr[i].email = user.email;
				arr[i].login = user.login;
				localStorage.setItem("users", JSON.stringify(arr))
				this.setState({user: arr})
			}
		})
		return mess
	}
	changeData = (obj) => {
		var mess = "";
		this.state.user.forEach(function(iteam){
			if((iteam.login == obj.login) || (iteam.email == obj.email)){
				
				mess = "err"
			}
		})
		if(mess == "err"){
			return mess
		}
		this.setState({
			user: [...this.state.user, obj]
		})
		localStorage.setItem("users", JSON.stringify([...this.state.user, obj]))
		return "none"
			}

	render(){

		return(
			<Router history = {history}>	
				
				<div>
					<Route path = "/"  component = {Routes} />
					<Route path = "/checkin" render = {() => 
						<Checkin changeData = {this.changeData } 
						transition = {this.transition} 
						path = {this.state.path}  
						lengthUsers = {this.state.user.length}
					/>} />
					<Route exact path = "/users" render = {() => <Users user = {this.state.user} removeUser = {this.removeUser} changeUser = {this.changeUser} />} />
					<Route  path = "/users/:userName" component = {UserName} />
				</div>
			</Router>
				
			)
	}
}
export default App