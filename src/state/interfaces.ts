import { UserModel } from '../domain/interfaces/account';

export type SessionState = {
  user: UserModel | null;
  token: string | null;
};
