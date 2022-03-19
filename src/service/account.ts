import AccountApi from '../api/account';
import {
  AccountAccessReturnType,
  IGoogleSignUpModel
} from '../domain/interfaces/account';

type AccountService = {
  GoogleSignUp(
    accessToken: string,
    username: string
  ): Promise<AccountAccessReturnType>;
};

const AccountService: AccountService = {
  async GoogleSignUp(
    accessToken: string,
    username: string
  ): Promise<AccountAccessReturnType> {
    const oauthUserInfo = await AccountApi.getGoogleOauthUserInfo(accessToken);
    const model: IGoogleSignUpModel = {
      googleId: oauthUserInfo.id,
      name: oauthUserInfo.name,
      email: oauthUserInfo.email,
      username: username,
      avatar: oauthUserInfo.picture
    };
    const user = await AccountApi.googleSignUp(model);
    return { user: user, token: accessToken };
  }
};

export default AccountService;
