import AccountApi from '../api/account';
import { AccountAccessReturnType } from '../domain/interfaces/account';

type AccountService = {
  GoogleSignUp(accessToken: string): Promise<AccountAccessReturnType>;
};

const AccountService: AccountService = {
  async GoogleSignUp(accessToken: string): Promise<AccountAccessReturnType> {
    const user = await AccountApi.getGoogleUserInfo(accessToken);
    return { user: user, token: accessToken };
  }
};

export default AccountService;
