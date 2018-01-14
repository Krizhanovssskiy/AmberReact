import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/jquery/dist/jquery.min.js';
import './include/bootstrap';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

