import React, {Component} from "react"
import { connect } from "react-redux"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
const history = createBrowserHistory();
class Checkin extends Component{
	constructor(props){
		super(props)
		this.state = {
			email: "",
			name: "",
			login: "",
			password: ""
		}
	}

	change = {
		email: (event) => {this.setState({email: event.target.value})},
		name: (event) => {this.setState({name: event.target.value})},
		login: (event) => {this.setState({login: event.target.value})},
		password: (event) => {this.setState({password: event.target.value})}
	}
	render(){
		console.log(">>>++", this.context.router);
		return(		
			<form id = "checkIn" className = "container-fluid">
			<link to = "/users"></link>
			<button>зарегистрироваться через Facebook</button>
			<div className = "lines"><hr className = "line" /><span className = "line-Word">или</span><hr className = "line"  /></div>
			<input 
				type = "email"  
				className = "email" 
				value = {this.state.email} 
				placeholder = "Моб. телефон или эл. адрес" 
				onChange = {this.change.email}
			/>
			<input 
				type = "text" 
				className = "name" 
				value = {this.state.name}
				 placeholder = "Имя и фамилия" 
				 onChange = {this.change.name}
			/>
			<input 
				type = "text" 
				className = "login" 
				value = {this.state.login} 
				placeholder = "Имя пользователя" 
				onChange = {this.change.login}
			/>
			<input 
				type = "password" 
				className = "password" 
				value = {this.state.password} 
				placeholder = "Пароль" 
				onChange = {this.change.password}
			/>	
			<Link  to = "/users" className = "checkIn-button" onClick = {
				(e) => { 
						this.props.changeData({
							id: 0 ,
							name: this.state.name, 
							email: this.state.email, 
							login: this.state.login, 
							password: this.state.password
							})
						
						
						console.log("|||||||", history.location);
						
						
						}
			}>регистрация</Link>
			<div>Регистрируясь, вы принимаете наши Условия, Политику использования данных и Политику в отношении файлов cookie.</div>
			<div>{this.props.children}</div>
			</form>	
			)
	}
}
export default Checkin