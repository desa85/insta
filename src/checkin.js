import React, {Component} from "react"
import { connect } from "react-redux"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Checkin extends Component{
	constructor(props){
		super(props)
	}
	

	render(){
		return(
				
					<form id = "checkIn" className = "container-fluid">
					<a>dfihi</a>
					<button>зарегистрироваться через Facebook</button>
					<div className = "lines"><hr className = "line" /><span className = "line-Word">или</span><hr className = "line"  /></div>
					<input type = "email"  className = "email" placeholder = "Моб. телефон или эл. адрес" />
					<input type = "text" className = "fi" placeholder = "Имя и фамилия" />
					<input type = "text" className = "userName" placeholder = "Имя пользователя" />
					<input type = "password" className = "password" placeholder = "Пароль" />	
					<button className = "checkIn-button">регистрация</button>
					<div>Регистрируясь, вы принимаете наши Условия, Политику использования данных и Политику в отношении файлов cookie.</div>
					<div>{this.props.children}</div>
					</form>
				
			)
	}
}
export default Checkin