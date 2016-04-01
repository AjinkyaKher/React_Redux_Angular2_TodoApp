import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';

import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';

import {App} from './app';
import {createStore} from 'redux';
import {rootReducer} from './rootReducer';
import {TodoActions} from './todoActions';

const appStore = createStore(rootReducer);

bootstrap(App, [
  provide('AppStore', { useValue: appStore }),
  TodoActions 
])
  .catch(err => console.error(err));

// import {bootstrap} from 'angular2/platform/browser';
// import {createStore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
// import {App} from './app';
// // import {provider} from  'ng2-redux';
// import {rootReducer} from './rootReducer';
 
// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
// const store = createStoreWithMiddleware(rootReducer);
 
// bootstrap(
//   App,
//   [provider(store)]
//   );