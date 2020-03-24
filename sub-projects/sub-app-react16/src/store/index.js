// @flow
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createHashHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';

export const history = createHashHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Options: http://extension.remotedev.io/docs/API/Arguments.html#actioncreators
  })
  : compose;
/* eslint-enable no-underscore-dangle */
const enhancers = [];
enhancers.push(applyMiddleware(
  thunk,
  routerMiddleware(history),
));

// Apply Middleware & Compose Enhancers
const enhancer = composeEnhancers(...enhancers);

export function configureStore (initialState) {
  return createStore(
    createRootReducer(history), // new root reducer with router state
    initialState,
    enhancer
  );
}
