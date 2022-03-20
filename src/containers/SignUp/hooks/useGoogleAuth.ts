import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Google from 'expo-auth-session/providers/google';
import { SignUpRoutes } from '../../../navigation/AuthNavigation/routes';
import { SignUpNavigationProp } from '../../../navigation/types';
import config from '../../../config';
import { useAppDispatch, useAppSelector } from '../../../state/types';
import { GoogleSignInAction } from '../../../state/actions/session';
import { getGoogleSignInLoading } from '../../../state/selectors/session';

type ReturnType = {
  isLoading: boolean;
  onGoogleSignUp: () => void;
};

export default function useGoogleAuth(): ReturnType {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getGoogleSignInLoading);
  const navigation = useNavigation<SignUpNavigationProp<SignUpRoutes.SPLASH>>();
  const [_, response, promptAsync] = Google.useAuthRequest({
    expoClientId: config.GOOGLE_AUTH_EXPO_CLIENT_ID
  });

  const onGoogleSignUp = () => promptAsync();

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      // try signing user in first to get existing user
      dispatch(GoogleSignInAction(authentication?.accessToken as string))
        .then(() => navigation.navigate(SignUpRoutes.FEED))
        .catch(() =>
          navigation.navigate(SignUpRoutes.USERNAME, {
            oauthAccessToken: authentication?.accessToken as string
          })
        );
    }
  }, [response]);

  return {
    isLoading,
    onGoogleSignUp
  };
}
