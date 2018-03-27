import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'unstated';

import './index.css';

import App from './components/App';
import { playerContainer } from './containers/player';
import { pianoContainer } from './containers/piano';
import { keyboardContainer } from './containers/keyboard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider inject={[playerContainer, pianoContainer, keyboardContainer]}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
