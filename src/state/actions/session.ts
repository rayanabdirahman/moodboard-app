import { async } from '../utilities/asyncAction';
import AccountService from '../../service/account';
import { SessionActionType } from './types';

export const GoogleSignUpAction = (
  googleAccessToken: string,
  username: string
): any => {
  return async(
    SessionActionType.GOOGLE_SIGN_UP,
    AccountService.GoogleSignUp,
    googleAccessToken,
    username
  );
};

export const GoogleSignInAction = (googleAccessToken: string): any => {
  return async(
    SessionActionType.GOOGLE_SIGN_IN,
    AccountService.GoogleSignIn,
    googleAccessToken
  );
};
