import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import * as firebase from 'firebase';

import App from './containers/App';
import Routes from './router';
import registerServiceWorker from './utils/registerServiceWorker';

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);

registerServiceWorker();
