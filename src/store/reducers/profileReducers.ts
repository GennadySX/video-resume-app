import {PREMIUM_ACCOUNT, PREMIUM_OFF} from '../actions/profileAction';

const initialState = {
  premium: false,
};

const profileReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case PREMIUM_ACCOUNT:
      return {
        ...state,
        premium: !state.premium,
      };
    case PREMIUM_OFF:
      return {
        ...state,
        premium: false,
      };
    default:
      return state;
  }
};

export default profileReducer;
