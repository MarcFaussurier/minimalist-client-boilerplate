
import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.scss';
import App from './components/App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  window.document.getElementById('root')
);

registerServiceWorker();


