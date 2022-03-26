import axios from 'axios';
import config from '../config';
import {
  AccountAccessReturnType,
  IGoogleOauthUserModel,
  IGoogleSignInModel,
  IGoogleSignUpModel,
  UserModel
} from '../domain/interfaces/account';
import makeRequest from '../utilities/makeRequest';

type IAccountApi = {
  getGoogleOauthUserInfo(
    googleAccessToken: string
  ): Promise<IGoogleOauthUserModel>;
  googleSignUp(model: IGoogleSignUpModel): Promise<any>;
  googleSignIn(model: IGoogleSignInModel): Promise<any>;
  refreshAccessToken(): Promise<any>;
};

const AccountApi: IAccountApi = {
  async getGoogleOauthUserInfo(
    googleAccessToken: string
  ): Promise<IGoogleOauthUserModel> {
    const response = await makeRequest({
      method: 'GET',
      isExternal: true,
      url: `${config.API_GOOGLE_OAUTH_USER_INFO}`,
      headers: { Authorization: `Bearer ${googleAccessToken}` }
    });

    console.log('GOOGLE SIGNIN RESPONSE: ', response);
    return response;
  },
  async googleSignUp(model: IGoogleSignUpModel): Promise<any> {
    return await makeRequest({
      url: `/accounts/auth/google/signup`,
      method: 'POST',
      data: model
    });
  },
  async googleSignIn(model: IGoogleSignInModel): Promise<any> {
    return await makeRequest({
      url: `/accounts/auth/google/signin`,
      method: 'POST',
      data: model
    });
  },
  async refreshAccessToken(): Promise<any> {
    return await makeRequest({
      url: `/accounts/auth/accessToken/refresh`,
      method: 'GET'
    });
  }
};

export default AccountApi;
