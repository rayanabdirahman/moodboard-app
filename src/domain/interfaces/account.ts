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
