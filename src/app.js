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
			user: [ 
					{id: 0 ,name: "Витя Акимов", email: "lordpovel@mail.ru", login: "imperator", password: "3570202"}, 
					{id: 1 ,name: "Паша Неразберихин", email: "lexa@yandex.ru", login: "anarhia", password: "12345"}, 
					{id: 2 ,name: "Сережa Артемов", email: "jesus@gmail.com", login: "religia", password: "gospod"}], a: true
		}
	}

	changeData = (obj) => {
		this.setState({
			user: [...this.state.user, obj]
		})
			}
	render(){
		
		return(
			<Router history = {history}>	
				
				<div>
					<Route path = "/"  component = {Routes} />
					<Route path = "/checkin" render = {() => <Checkin changeData = {this.changeData } transition = {this.transition} />} />
					<Route exact path = "/users" render = {() => <Users user = {this.state.user} />} />
					<Route  path = "/users/:userName" component = {UserName} />
				</div>
			</Router>
				
			)
	}
}
export default App