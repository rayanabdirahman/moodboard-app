import { AccountRolesEnum } from '../enums/account';

export type IGoogleSignUpModel = {
  googleId: string;
  name: string;
  username: string;
  email: string;
  avatar: string;
  role?: AccountRolesEnum[];
};

export type IGoogleOauthUserModel = {
  id: string;
  name: string;
  family_name: string;
  given_name: string;
  email: string;
  locale: string;
  picture: string;
  verified_email: boolean;
};

export type UserModel = {
  id: string;
  name: string;
  username: string;
  email: string;
  avatar: string;
  createdAt: string;
  role: AccountRolesEnum[];
};

export type SignInModel = {
  email: string;
  password: string;
};

export type AccountAccessReturnType = {
  token: string;
  user: UserModel;
};
