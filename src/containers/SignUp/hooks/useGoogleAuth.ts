import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Google from 'expo-auth-session/providers/google';
import { SignUpRoutes } from '../../../navigation/AuthNavigation/routes';
import { SignUpNavigationProp } from '../../../navigation/types';
import config from '../../../config';

type ReturnType = {
  onGoogleSignUp: () => void;
};

export default function useGoogleAuth(): ReturnType {
  const navigation = useNavigation<SignUpNavigationProp<SignUpRoutes.SPLASH>>();
  const [_, response, promptAsync] = Google.useAuthRequest({
    expoClientId: config.GOOGLE_AUTH_EXPO_CLIENT_ID
  });

  const onGoogleSignUp = () => promptAsync();

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      navigation.navigate(SignUpRoutes.USERNAME, {
        oauthAccessToken: authentication?.accessToken as string
      });
    }
  }, [response]);

  return {
    onGoogleSignUp
  };
}
