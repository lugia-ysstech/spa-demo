/**
 *
 * create by ligx
 *
 */

import { bindActionCreators as bind } from 'redux';

export default function bindActionCreators(
  actionCreators,
  dispatch
) {
  const filterActionCreators = {};
  Object.keys(actionCreators).forEach(k => {
    if (k !== 'default' && typeof (actionCreators[k]) === 'function') {
      filterActionCreators[k] = actionCreators[k];
    }
  });
  return bind(filterActionCreators, dispatch);
}
