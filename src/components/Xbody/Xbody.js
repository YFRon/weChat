import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Xbody extends Component {
	constructor(props){
		super(props);
		this.state = {
			song_list:[]
		}
	}
	loadMore(){
		React.axios.get('music.json').then((response)=>{
			this.setState({
				song_list:this.state.song_list.concat(response.data.song_list)
			})
		}).catch(function(error){
			console.log(error);
		})
	}
  render() {
    return (
            <div name={
                (()=>{
                    return "abc"
                })()
            } className="weui-panel weui-panel_access" style={{paddingBottom:"70px"}}>
                <div className="weui-panel__hd">图文组合列表</div>
                <div className="weui-panel__bd">
                    {(()=>{
                        return this.state.song_list.map((item,index)=>{
                            return (
                                <Link to={`/detail/${item.song_id}`} key={index} className="weui-media-box weui-media-box_appmsg">
                                    <div className="weui-media-box__hd">
                                        <img className="weui-media-box__thumb" src={item.pic_small} alt="" />
                                    </div>
                                    <div className="weui-media-box__bd">
                                        <h4 className="weui-media-box__title">{item.title}</h4>
                                        <p className="weui-media-box__desc">{item.author}</p>
                                    </div>
                                </Link>
                            )
                        })
                    })()}                  
                </div>
                <div className="weui-panel__ft" onClick={this.loadMore.bind(this)}>
                    <a href="javascript:void(0);" className="weui-cell weui-cell_access weui-cell_link">
                        <div className="weui-cell__bd">查看更多</div>
                        <span className="weui-cell__ft"></span>
                    </a>
                </div>
            </div>
        )
  }
  componentDidMount(){
  	this.loadMore()
  }
}

export default Xbody;
