require('../css/main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const reactRoot = document.getElementsByTagName("main")[0];

ReactDOM.render(
	<App />,
	reactRoot
);
