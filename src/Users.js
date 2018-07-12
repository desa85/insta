import React, {Component} from "react"
import { connect } from "react-redux"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Checkin extends Component{
	constructor(props){
		super(props)	
		this.state = {
			users: this.props.user ,
			search: "",
			chname: "",
			chemail: "",
			chlogin: "",
			chid: 0
		}
	}
	change = {
		email: (event) => {this.setState({chemail: event.target.value})},
		name: (event) => {this.setState({chname: event.target.value})},
		login: (event) => {this.setState({chlogin: event.target.value})},
	}
	render(){
		let form = (val, index) => {return(
			<li key = {index}>
				<Link to = {"/users/" + val.name} >
					<div> 
						<div className = "rightUser">
							<div className = "userEmail">
								 {val.email}
							</div>
							<div className = "remove" onClick = {(e) => {this.props.removeUser(val.id); e.preventDefault();}}></div>
							<div className = "change" onClick = {(e) => {
								 
								console.log(e.target);
								e.preventDefault();
								this.setState({
									chname: val.name,
									chemail: val.email,
									chlogin: val.login,
									chid: val.id
								})
								document.getElementById("changeUser").style.display = "block";
								document.getElementById("users").style.display = "none";
							}
							}></div>
						</div>
						<div className = "leftUser">
							<div className = "userLogin">
								{val.login}
							</div>
							<div className = "fi">
								{val.name}
							</div>
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
					<div className = "changeUser" className = "container">
					<form id = "changeUser" className = "container-fluid" >
						<input 
							type = "email"  
							className = "email" 
							value = {this.state.chemail} 
							placeholder = "Моб. телефон или эл. адрес" 
							onChange = {this.change.email}
						/>
						<input 
							type = "text" 
							className = "name" 
							value = {this.state.chname} 
							placeholder = "Имя и фамилия" 
							onChange = {this.change.name}
						/>
						<input 
							type = "text" 
							className = "login" 
							value = {this.state.chlogin}  
							placeholder = "Имя пользователя" 
							onChange = {this.change.login}
						/>
						<p className = "errCheck"> Такой ник уже есть </p>
						<button onClick = {(e) => {
							e.preventDefault();
							let err = this.props.changeUser({
								name: this.state.chname,
								email: this.state.chemail,
								login: this.state.chlogin,
								id: this.state.chid

							})
							if(err == "err"){
								document.getElementsByClassName("errCheck")[0].style.display = "block"
							}
							else{
								document.getElementById("changeUser").style.display = "none";
								document.getElementById("users").style.display = "block";
								document.getElementsByClassName("errCheck")[0].style.display = "none"
							}
							
						}}>Изменить</button>
			</form>	
					</div>
				</div>
			)
	}
}
export default Checkin