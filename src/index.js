import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './components/Counter.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import counter from './reducers'

//initialize central Redux store
const store = createStore(counter);

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
);

