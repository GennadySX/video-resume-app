import {AUTH_SIGN} from '../actions/authAction';

const initialState = {
  auth: '',
};

const authReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case AUTH_SIGN:
      return {
        ...state,
        auth: action.auth,
      };
    default:
      return state;
  }
};

export default authReducer;
