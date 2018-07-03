import React, {Component} from "react"
import { connect } from "react-redux"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
var user = [ 
{id: 0 ,name: "Витя", email: "", login: "", password: ""}, 
{id: 1 ,name: "Паша", email: "", login: "", password: ""}, 
{id: 2 ,name: "Сережa", email: "", login: "", password: ""}, 
{id: 3 ,name: "Миша", email: "", login: "", password: ""}, 
{id: 4 ,name: "Антон", email: "", login: "", password: ""}, 
{id: 5 ,name: "Женя", email: "", login: "", password: ""}, 
{id: 6 ,name: "Максим", email: "", login: "", password: ""}, 
{id: 7 ,name: "Саша", email: "", login: "", password: ""}, 
{id: 8 ,name: "Ваня", email: "", login: "", password: ""}]
class Checkin extends Component{
	constructor(props){
		super(props)
	}
	

	render(){
		console.log(this.props.location);
		return(
				
					<div id = "users" className = "container">
						<ul>
							{
								user.map((val, index) => {
								return(<li key = {index}><Link to = {"/users/" + val.name}><div>{val.name}</div></Link></li>)
							}
							)
							}
							
						</ul>
					</div>
				
			)
	}
}
export default Checkin