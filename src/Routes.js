import React, {Component} from "react"
import { connect } from "react-redux"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Routes extends Component{
	constructor(props){
		super(props)	
	}
	render(){
		if(this.props.history.location.pathname == "/"){
			this.props.history.push("/checkin")
		}
		return(
			<div>
				<ul>
					<li><Link to = "/">Home</Link></li>
					<li><Link to = "/users">NoHome</Link></li>
				</ul>
			</div>
		)
		
	}
}
export default Routes