import AccountApi from '../api/account';
import {
  AccountAccessReturnType,
  IGoogleSignUpModel
} from '../domain/interfaces/account';

type AccountService = {
  GoogleSignUp(
    googleAccessToken: string,
    username: string
  ): Promise<AccountAccessReturnType>;
  GoogleSignIn(googleAccessToken: string): Promise<AccountAccessReturnType>;
};

const AccountService: AccountService = {
  async GoogleSignUp(
    googleAccessToken: string,
    username: string
  ): Promise<AccountAccessReturnType> {
    const oauthUserInfo = await AccountApi.getGoogleOauthUserInfo(
      googleAccessToken
    );
    const model: IGoogleSignUpModel = {
      googleId: oauthUserInfo.id,
      name: oauthUserInfo.name,
      email: oauthUserInfo.email,
      username: username,
      avatar: oauthUserInfo.picture
    };
    const { user, accessToken } = await AccountApi.googleSignUp(model);
    return { user, accessToken };
  },
  async GoogleSignIn(
    googleAccessToken: string
  ): Promise<AccountAccessReturnType> {
    const oauthUserInfo = await AccountApi.getGoogleOauthUserInfo(
      googleAccessToken
    );
    const { user, accessToken } = await AccountApi.googleSignIn({
      googleId: oauthUserInfo.id
    });
    return { user, accessToken };
  }
};

export default AccountService;
