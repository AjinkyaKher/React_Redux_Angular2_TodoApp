/* eslint-disable no-console */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import todoApp from './reducers';
import App from './components/App';
// import { addTodo } from './actions';

const logger = store => next => action => {
  console.log('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  return result;
};

const store = createStore(todoApp, compose(
    applyMiddleware(logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// todos: [{ id: -1, text: 'Task 1', completed: false }], visibilityFilter: 'SHOW_ALL' }
