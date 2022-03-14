import { SessionActionType } from '../actions/types';
import { State } from '../store';
import { getLoadingState } from './ui';

export const getAuthenticatedUser = ({ session }: State) => session.user;

export const getSignInLoading = getLoadingState(SessionActionType.SIGN_IN);
