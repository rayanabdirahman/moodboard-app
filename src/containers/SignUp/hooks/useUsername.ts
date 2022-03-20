import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import {
  SignUpRoutes,
  SignUpStackParamList
} from '../../../navigation/AuthNavigation/routes';
import { SignUpNavigationProp } from '../../../navigation/types';
import { useAppDispatch, useAppSelector } from '../../../state/types';
import { GoogleSignUpAction } from '../../../state/actions/session';
import { getGoogleSignUpLoading } from '../../../state/selectors/session';

type ReturnType = {
  isLoading: boolean;
  initialValues: { username: string };
  onSubmit: (values: { username: string }) => void;
};

export default function useUsername(): ReturnType {
  const dispatch = useAppDispatch();
  const navigation =
    useNavigation<SignUpNavigationProp<SignUpRoutes.USERNAME>>();
  const route =
    useRoute<RouteProp<SignUpStackParamList, SignUpRoutes.USERNAME>>();
  const initialValues = { username: '' };
  const isLoading = useAppSelector(getGoogleSignUpLoading);

  const onSubmit = (values: { username: string }) => {
    if (route.params?.oauthAccessToken) {
      return dispatch(
        GoogleSignUpAction(route.params?.oauthAccessToken, values?.username)
      ).then(() => navigation.navigate(SignUpRoutes.FEED));
    }
    console.log('non oauth signin model: ', values);
  };

  return {
    isLoading,
    initialValues,
    onSubmit
  };
}
