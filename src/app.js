import React, {Component} from "react"
import { connect } from "react-redux"
import { Route, Link } from 'react-router-dom';
class App extends Component{
	constructor(props){
		super(props)
	}
	

	render(){

		console.log(">>>", React.Children);
		return(
					
					<div>
						<div>App</div>
						<ul>
							<li><Link to = "/">Home</Link></li>
							<li><Link to = "/users">NoHome</Link></li>
						</ul>
						{this.props.children}
					</div>
				
			)
	}
}
export default App