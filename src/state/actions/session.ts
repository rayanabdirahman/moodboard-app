import { SignInModel } from '../../domain/interfaces/account';
import { async } from '../utilities/asyncAction';
import AccountService from '../../service/account';
import { SessionActionType } from './types';

export const GoogleSignUpAction = (accessToken: string): any => {
  return async(
    SessionActionType.GOOGLE_SIGN_UP,
    AccountService.GoogleSignUp,
    accessToken
  );
};
