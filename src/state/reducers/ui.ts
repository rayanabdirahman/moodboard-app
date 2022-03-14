import { AnyAction } from 'redux';
import { UIState } from '../interfaces';
import { UIActionType } from '../actions/types';

const initialState: UIState = {
  isLoading: []
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case UIActionType.SET_LOADING_ON: {
      return {
        ...state,
        isLoading: [...state.isLoading, { action: action.status }]
      };
    }
    case UIActionType.SET_LOADING_OFF: {
      const regEx = /(_SUCCESS|_FAIL)/g;
      const initialAction = action.status.replace(regEx, '');
      return {
        ...state,
        isLoading: state.isLoading.filter(
          (loading) => loading.action !== initialAction
        )
      };
    }
    default: {
      return state;
    }
  }
};
