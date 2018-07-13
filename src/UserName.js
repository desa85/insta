import React, {Component} from "react"
import { connect } from "react-redux"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
class UserName extends Component{
	constructor(props){
		super(props);
	}
	render(){
		let commponent = null;
		JSON.parse(localStorage.getItem("users")).forEach((item, i) => {
			if(item.name == this.props.match.params.userName){
			commponent = <div className = "container" id = "UserName">{this.props.match.params.userName}</div>
		}
		})
		if(!commponent){
			commponent = <div className = "container" id = "UserName">{"Такого пользоватеклья к сожалению нет"}</div>
		}
		return commponent
	}
}
export default UserName