import React from 'react';
import ReactDOM from 'react-dom';

/* CSS */
import '../assets/css/grid.css';
import '../assets/css/theme.css';
import '../assets/css/index.css';
import 'boxicons';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers';
const store = createStore(rootReducer);


import App from './App';
document.title = '|Admin Portal|The Classic Ladies|';
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
