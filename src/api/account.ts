import axios from 'axios';
import config from '../config';
import {
  AccountAccessReturnType,
  UserModel
} from '../domain/interfaces/account';

type AccountApi = {
  getGoogleUserInfo(accessToken: string): Promise<any>;
};

const AccountApi: AccountApi = {
  async getGoogleUserInfo(accessToken: string): Promise<any> {
    try {
      const response = await axios.get(`${config.GOOGLE_API_USER_INFO}`, {
        headers: { Authorization: `Bearer ${accessToken}` }
      });

      return response.data;
    } catch (error: any) {
      throw error.response ? error.response.data.error : error.request;
    }
  }
};

export default AccountApi;
