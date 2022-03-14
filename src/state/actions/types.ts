export enum AsyncActionStatus {
  STARTED = 'STARTED',
  SUCCEEDED = 'SUCCEEDED',
  FAILED = 'FAILED'
}

export enum UIActionType {
  SET_LOADING_ON = '[UI]: SET_LOADING_ON',
  SET_LOADING_OFF = '[UI]: SET_LOADING_OFF'
}

export enum SessionActionType {
  SIGN_UP = '[Session]: SIGN_UP',
  SIGN_UP_SUCCESS = '[Session]: SIGN_UP_SUCCESS',
  SIGN_UP_FAIL = '[Session]: SIGN_UP_FAIL',
  SIGN_IN = '[Session]: SIGN_IN',
  SIGN_IN_SUCCESS = '[Session]: SIGN_IN_SUCCESS',
  SIGN_IN_FAIL = '[Session]: SIGN_IN_FAIL',
  SET_CURRENT_USER = '[Session]: SET_CURRENT_USER',
  SET_CURRENT_USER_SUCCESS = '[Session]: SET_CURRENT_USER_SUCCESS',
  SET_CURRENT_USER_FAIL = '[Session]: SET_CURRENT_USER_FAIL',
  SIGN_OUT = '[Session]: SIGN_OUT',
  SIGN_OUT_SUCCESS = '[Session]: SIGN_OUT_SUCCESS',
  SIGN_OUT_FAIL = '[Session]: SIGN_OUT_FAIL'
}
