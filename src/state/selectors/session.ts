import { SessionActionType } from '../actions/types';
import { State } from '../store';
import { getLoadingState } from './ui';

export const getAuthSession = ({ session }: State) => session;

export const getIsAuthenticated = ({ session }: State) =>
  session.isAuthenticated;

export const getAuthenticatedUser = ({ session }: State) => session.user;

export const getAccessToken = ({ session }: State) => session.accessToken;

export const getGoogleSignUpLoading = getLoadingState(
  SessionActionType.GOOGLE_SIGN_UP
);

export const getGoogleSignInLoading = getLoadingState(
  SessionActionType.GOOGLE_SIGN_IN
);

export const getSignInLoading = getLoadingState(SessionActionType.SIGN_IN);
