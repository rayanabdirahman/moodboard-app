import { AnyAction } from 'redux';
import { SessionState } from '../interfaces';
import { SessionActionType } from '../actions/types';

const initialState: SessionState = {
  user: null,
  token: null
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SessionActionType.SIGN_IN_SUCCESS:
    case SessionActionType.SIGN_UP_SUCCESS: {
      const { token, user } = action.payload;
      return { ...state, token, user };
    }
    case SessionActionType.SET_CURRENT_USER_SUCCESS:
    case SessionActionType.SET_CURRENT_USER_FAIL: {
      const { token, user } = action.payload;
      return { ...state, token, user };
    }
    case SessionActionType.SIGN_IN_FAIL:
    case SessionActionType.SIGN_UP_FAIL:
    case SessionActionType.SIGN_OUT_SUCCESS: {
      return { ...state, user: null, token: null };
    }
    default: {
      return state;
    }
  }
};
