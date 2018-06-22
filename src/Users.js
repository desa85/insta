import React, {Component} from "react"
import { connect } from "react-redux"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
var user = ["Коля", "Витя", "Паша", "Сережа", "Миша", "Антон", "Женя", "Максим", "Саша", "Ваня"]
class Checkin extends Component{
	constructor(props){
		super(props)
	}
	

	render(){
		console.log("lox");
		return(
				
					<div>
						<ul>
							{
								user.map((val, index) => {
								return(<li key = {index}>{val}</li>)
							}
							)
							}
							
						</ul>
					</div>
				
			)
	}
}
export default Checkin