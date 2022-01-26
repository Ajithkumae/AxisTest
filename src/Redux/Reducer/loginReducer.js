import {actionTypes} from '../Action/loginAction';
const initialState = {
  userNameState: null,
};
console.log('AAa', initialState);
const loginReducer = (state = initialState, action) => {
  console.log('actions>>>', action);
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        userNameState: action.token,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        userNameState: null,
      };
    default:
      return state;
  }
};

export default loginReducer;
