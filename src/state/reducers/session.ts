import { AnyAction } from 'redux';
import { SessionState } from '../interfaces';
import { SessionActionType } from '../actions/types';

const initialState: SessionState = {
  user: null,
  accessToken: null
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SessionActionType.SIGN_IN_SUCCESS:
    case SessionActionType.SIGN_UP_SUCCESS:
    case SessionActionType.GOOGLE_SIGN_UP_SUCCESS:
    case SessionActionType.GOOGLE_SIGN_IN_SUCCESS: {
      const { user, accessToken } = action.payload;
      return { ...state, user, accessToken };
    }
    case SessionActionType.SET_CURRENT_USER_SUCCESS:
    case SessionActionType.SET_CURRENT_USER_FAIL: {
      const { accessToken, user } = action.payload;
      return { ...state, accessToken, user };
    }
    case SessionActionType.SIGN_IN_FAIL:
    case SessionActionType.SIGN_UP_FAIL:
    case SessionActionType.SIGN_OUT_SUCCESS: {
      return { ...state, user: null, accessToken: null };
    }
    default: {
      return state;
    }
  }
};
