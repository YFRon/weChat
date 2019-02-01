import React, { Component } from 'react';

import Xheader from '../../components/Xheader/Xheader.js';
import Xsearch from '../../components/Xsearch/Xsearch.js';
import Xbody from '../../components/Xbody/Xbody.js';

class Home extends Component {
  render() {
    return (
    	<div>
			<Xheader title = "微博" />
			<Xsearch />
			<Xbody />
		</div>
    );
  }
}

export default Home;
