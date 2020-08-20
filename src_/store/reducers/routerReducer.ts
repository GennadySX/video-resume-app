import {ROUTER_PUSH, ROUTER_POP} from '../actions/routerAction';

const initialState = {
  screens: [],
};

const routerReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case ROUTER_PUSH:
      return {
        ...state,
        screens: [...state.screens, action.screen],
      };
    case ROUTER_POP:
      return {
        ...state,
        screens: state.screens.filter(
          (screen: string) => screen !== action.screen,
        ),
      };
    default:
      return state;
  }
};

export default routerReducer;
