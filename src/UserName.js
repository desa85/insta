import React, {Component} from "react"
import { connect } from "react-redux"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
class UserName extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className = "container" id = "UserName">{this.props.match.params.userName}</div>
		)
	}
}
export default UserName