import React, { Component } from 'react';

import { Route } from "react-router-dom";

import Wechat from '../Wechat/Wechat.js';
import Catalog from '../Catalog/Catalog.js';
import Find from '../Find/Find.js';
import Mine from '../Mine/Mine.js';
import Xfooter from '../../components/Xfooter/Xfooter.js';

class Home extends Component {
  render() {
    return (
    	<div>
    		<Route path='/home/wechat' component={Wechat} />
    		<Route path='/home/catalog' component={Catalog} />
    		<Route path='/home/find' component={Find} />
    		<Route path='/home/mine' component={Mine} />
    		<Xfooter />
    	</div>
    );
  }
}

export default Home;
