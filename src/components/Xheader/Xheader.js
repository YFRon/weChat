import React,{
	Component
} from "react";

import "./Xheader.css";

class Xheader extends Component{
	constructor(props){
		super(props);
		this.props = props;
		this.state = {
			title:"微信",
			name:"sdf"
		}
	}
	render(){
		return (
			<div>
				<header>{this.props.title}</header>
				<header>{this.state.title}</header>
			</div>
		)
	}

}

export default Xheader;