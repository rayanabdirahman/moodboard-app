import { AccountRolesEnum } from '../enums/account';

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
