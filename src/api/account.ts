import axios from 'axios';
import config from '../config';
import {
  AccountAccessReturnType,
  IGoogleOauthUserModel,
  IGoogleSignInModel,
  IGoogleSignUpModel,
  UserModel
} from '../domain/interfaces/account';

type IAccountApi = {
  getGoogleOauthUserInfo(
    googleAccessToken: string
  ): Promise<IGoogleOauthUserModel>;
  googleSignUp(model: IGoogleSignUpModel): Promise<any>;
  googleSignIn(model: IGoogleSignInModel): Promise<any>;
};

const AccountApi: IAccountApi = {
  async getGoogleOauthUserInfo(
    googleAccessToken: string
  ): Promise<IGoogleOauthUserModel> {
    try {
      const response = await axios.get(`${config.API_GOOGLE_OAUTH_USER_INFO}`, {
        headers: { Authorization: `Bearer ${googleAccessToken}` }
      });

      return response.data;
    } catch (error: any) {
      throw error.response ? error.response.data.error : error.request;
    }
  },
  async googleSignUp(model: IGoogleSignUpModel): Promise<any> {
    try {
      const response = await axios.post(
        `${config.API_DEV_URL}/accounts/auth/google/signup`,
        model
      );
      return response.data.data;
    } catch (error: any) {
      throw error.response ? error.response.data.error : error.request;
    }
  },
  async googleSignIn(model: IGoogleSignInModel): Promise<any> {
    try {
      const response = await axios.post(
        `${config.API_DEV_URL}/accounts/auth/google/signin`,
        model
      );
      return response.data.data;
    } catch (error: any) {
      throw error.response ? error.response.data.error : error.request;
    }
  }
};

export default AccountApi;
