import React, {Component} from "react"
import { connect } from "react-redux"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Checkin extends Component{
	constructor(props){
		super(props)	
		this.state = {
			users: this.props.user ,
			search: ""
		}
	}
	render(){
		let form = (val, index) => {return(
			<li key = {index}>
												<Link to = {"/users/" + val.name}>
													<div> 
														<div className = "userEmail">
															 {val.email}
														</div>
														<div className = "userLogin">
															{val.login}
														</div>
														<div className = "fi">
															{val.name}
														</div>
														
													</div>
												</Link>
											</li>
			)}
		return(
				<div>
					
					<div id = "users" className = "container">
					<input id = "search" placeholder = "Поиск" value = {this.state.search} onChange = {(event) => {this.setState({search: event.target.value})}} />
						<ul>
							{
								
								this.state.users.map((val, index) => {
									let reg = new RegExp(this.state.search, 'i')
									if (this.state.search == ""){
										return form(val, index)
									}
									else if(val.login.search(reg) == 0){
										return form(val, index)
									}
							}
							)
							}
							
						</ul>
					</div>
				</div>
			)
	}
}
export default Checkin