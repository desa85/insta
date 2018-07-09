import React, {Component} from "react"
import { connect } from "react-redux"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Checkin extends Component{
	constructor(props){
		super(props)	
	}
	render(){
		
		return(
				
					<div id = "users" className = "container">
						<ul>
							{
								this.props.user.map((val, index) => {
								return(
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
								)
							}
							)
							}
							
						</ul>
					</div>
			)
	}
}
export default Checkin