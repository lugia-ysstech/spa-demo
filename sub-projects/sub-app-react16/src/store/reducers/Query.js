/**
 *
 * create by ligx
 *
 * @flow
 */
  // @flow

const initState = {
    counter: 0
  };

export const ChangeName = 'ChangeName';
export const ChangeAge = 'ChangeAge';

export default function (state = initState, action) {
  switch (action.type) {
    case ChangeName:
      return { ...state, name: action.value };
    case ChangeAge:
      return { ...state, age: action.value };
    default:
      return state;
  }
}


export function changeName (value) {

  return (dispatch, getState) => {

    dispatch({ type: ChangeName, value })
  };
}


export function changeAge (value) {

  return (dispatch, getState) => {

    dispatch({ type: ChangeAge, value })
  };
}
