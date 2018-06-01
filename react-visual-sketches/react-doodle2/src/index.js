import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Box from './App';
import Foot from './App';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Box />, document.getElementById('head-target'));
ReactDOM.render(<Foot />, document.getElementById('foot-target'));

registerServiceWorker();
