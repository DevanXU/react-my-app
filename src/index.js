import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BasicExample from './App';
import registerServiceWorker from './registerServiceWorker';

import {Router} from 'react-router';
import routes from './routes';

ReactDOM.render(<BasicExample />, document.getElementById('root'));

registerServiceWorker();
