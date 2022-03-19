import axios from 'axios';
import config from '../config';
import {
  AccountAccessReturnType,
  IGoogleOauthUserModel,
  IGoogleSignUpModel,
  UserModel
} from '../domain/interfaces/account';

type IAccountApi = {
  getGoogleOauthUserInfo(accessToken: string): Promise<IGoogleOauthUserModel>;
  googleSignUp(model: IGoogleSignUpModel): Promise<any>;
};

const AccountApi: IAccountApi = {
  async getGoogleOauthUserInfo(
    accessToken: string
  ): Promise<IGoogleOauthUserModel> {
    try {
      const response = await axios.get(`${config.API_GOOGLE_OAUTH_USER_INFO}`, {
        headers: { Authorization: `Bearer ${accessToken}` }
      });

      return response.data;
    } catch (error: any) {
      throw error.response ? error.response.data.error : error.request;
    }
  },
  async googleSignUp(model: IGoogleSignUpModel): Promise<any> {
    try {
      const response = await axios.post(
        `${config.API_DEV_URL}/accounts/auth/google`,
        model
      );
      return response.data.data;
    } catch (error: any) {
      throw error.response ? error.response.data.error : error.request;
    }
  }
};

export default AccountApi;
