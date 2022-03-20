import { SessionActionType } from '../actions/types';
import { State } from '../store';
import { getLoadingState } from './ui';

export const getAuthenticatedUser = ({ session }: State) => session.user;

export const getGoogleSignUpLoading = getLoadingState(
  SessionActionType.GOOGLE_SIGN_UP
);

export const getGoogleSignInLoading = getLoadingState(
  SessionActionType.GOOGLE_SIGN_IN
);

export const getSignInLoading = getLoadingState(SessionActionType.SIGN_IN);
