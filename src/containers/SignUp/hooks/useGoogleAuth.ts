import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Google from 'expo-auth-session/providers/google';
import { SignInRoutes } from '../../../navigation/AuthNavigation/routes';
import { SignInNavigationProp } from '../../../navigation/types';
import { useAppDispatch, useAppSelector } from '../../../state/types';
import { GoogleSignUpAction } from '../../../state/actions/session';
import { getGoogleSignUpLoading } from '../../../state/selectors/session';
import config from '../../../config';

type ReturnType = {
  isLoading: boolean;
  onGoogleSignUp: () => void;
};

export default function useGoogleAuth(): ReturnType {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<SignInNavigationProp<SignInRoutes.FORM>>();
  const isLoading = useAppSelector(getGoogleSignUpLoading);
  const [_, response, promptAsync] = Google.useAuthRequest({
    expoClientId: config.GOOGLE_AUTH_EXPO_CLIENT_ID
  });

  const onGoogleSignUp = () => promptAsync();

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      dispatch(GoogleSignUpAction(authentication?.accessToken as string));
    }
  }, [response]);

  return {
    isLoading,
    onGoogleSignUp
  };
}
