import { UserModel } from '../domain/interfaces/account';

export type UIState = {
  isLoading: { action: string }[];
};

export type SessionState = {
  user: UserModel | null;
  accessToken: string | null;
};
