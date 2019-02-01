import React, { Component } from 'react';
import './Xfooter.css'
import img from '../../assets/icon_tabbar.png';

import {Link} from 'react-router-dom';

class Xfooter extends Component {
	constructor(props){
		super(props);
		this.state = {
			tab:0,
			tabs:[{
				title:"微信",
				num:8,
				href:"wechat",
				dot:false
			},{
				title:"通讯录",
				num:0,
				href:"catalog",
				dot:false
			},{
				title:"发现",
				num:0,
				href:"find",
				dot:true
			},{
				title:"我",
				num:1,
				href:"mine",
				d0t:false
			}]
		}
	}
	tabClick(idx){
		this.setState({
			tab:idx
		})
	}
  render() {
    return (
    	<div className="weui-tabbar">
	    	{(()=>{
	    		return this.state.tabs.map((item,idx)=>{
	    				return (<Link to={`/home/${item.href}`} className={this.state.tab===idx?"weui-tabbar__item weui-bar__item_on":"weui-tabbar__item"} key={idx} onClick={this.tabClick.bind(this,idx)}>
												<span style={{display: "inline-block",position: "relative"}}>
									                <img src={img} alt="" className="weui-tabbar__icon" />
									                {(()=>{
									                	if(item.num > 0){
									                		return (<span className="weui-badge" style={{position: "absolute",top: "-2px",right: "-13px"}}>{item.num}</span>)
									                	}
									                })()}
									                {(()=>{
									                	if(item.dot){
									                		return (<span className="weui-badge weui-badge_dot" style={{position: "absolute",top: "0",right: "-6px"}}></span>)
									                	}
									                })()}
												</span>
												<p className="weui-tabbar__label">{item.title}</p>
											</Link>)
	    		})
	    	})()}
			</div>
    );
  }
}

export default Xfooter;
