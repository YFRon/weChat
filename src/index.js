import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import {HashRouter as Router ,Route,Redirect} from 'react-router-dom';

import './index.css';
import './assets/weui.css';
//import App from './App';

import Home from './html/Home/Home.js';
import Detail from './html/Detail/Detail.js'

import * as serviceWorker from './serviceWorker';
React.axios = axios;
ReactDOM.render(
	<Router>
		<div>
			<Route path="/" render={()=><Redirect to="/home/wechat" />} />
			<Route path='/detail/:id' component={Detail} />
			<Route path='/home' component={Home} />
		</div>
	</Router>,
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
