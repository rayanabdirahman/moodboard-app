import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Google from 'expo-auth-session/providers/google';
import config from '../../../config';
import { SignInRoutes } from '../../../navigation/AuthNavigation/routes';
import { SignInNavigationProp } from '../../../navigation/types';
import { GoogleSignInAction } from '../../../state/actions/session';
import { getGoogleSignInLoading } from '../../../state/selectors/session';
import { useAppDispatch, useAppSelector } from '../../../state/types';

type ReturnType = {
  isLoading: boolean;
  onGoogleSignIn: () => void;
};

export default function useGoogleAuth(): ReturnType {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getGoogleSignInLoading);
  const navigation = useNavigation<SignInNavigationProp<SignInRoutes.SPLASH>>();
  const [_, response, promptAsync] = Google.useAuthRequest({
    expoClientId: config.GOOGLE_AUTH_EXPO_CLIENT_ID
  });

  const onGoogleSignIn = () => promptAsync();

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      dispatch(GoogleSignInAction(authentication?.accessToken as string)).then(
        () => navigation.navigate(SignInRoutes.FEED)
      );
    }
  }, [response]);

  return {
    isLoading,
    onGoogleSignIn
  };
}
