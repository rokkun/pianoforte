import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'unstated';

import './index.css';

import App from './components/App';
import { midiContainer } from './containers/midi';
import { pianoContainer } from './containers/piano';
import { playerContainer } from './containers/player';
import { keyboardContainer } from './containers/keyboard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider
    inject={[midiContainer, pianoContainer, playerContainer, keyboardContainer]}
  >
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
