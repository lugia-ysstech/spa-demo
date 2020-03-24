// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import Query from './Query';


export default history =>
  combineReducers({
    router: connectRouter(history),
    Query
  });
