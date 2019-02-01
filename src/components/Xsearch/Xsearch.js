import React, {
	Component
} from 'react';
import './Xsearch.css'

class Xsearch extends Component {
	constructor(props){
		super(props);
		this.state = {
			isChange:false
		}
	}
	isClick(){
		this.setState({
				isChange:!this.state.isChange
		})
	
	}
	render() {
		return(
			<div className={this.state.isChange?"weui-search-bar weui-search-bar_focusing":"weui-search-bar"} id="searchBar">
				<form className="weui-search-bar__form">
					<div className="weui-search-bar__box">
						<i className="weui-icon-search"></i>
						<input type="search" className="weui-search-bar__input" id="searchInput" placeholder="搜索" required="" />
						<a href="javascript:;" className="weui-icon-clear" id="searchClear"></a>
					</div>
					<label onClick={this.isClick.bind(this)} className="weui-search-bar__label" id="searchText">
                <i className="weui-icon-search"></i>
                <span>搜索</span>
            </label>
				</form>
				<a href="javascript:;" onClick={this.isClick.bind(this)} className="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
		</div>
		);
	}
}

export default Xsearch;