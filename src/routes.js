import React from 'react';
import {Route, HashRouter} from 'react-router-dom';

import App from './App';
import MainPage from './MainPage';

export default (
	<HashRouter>
		<div>
			<Route path='/' render={()=><App />} />
		</div>
	</HashRouter>
)