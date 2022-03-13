import { useNavigation } from '@react-navigation/native';
import { SignInModel } from '../../../domain/interfaces/account';
import { SignInRoutes } from '../../../navigation/AuthNavigation/routes';
import { SignInNavigationProp } from '../../../navigation/types';

type ReturnType = {
  isLoading: boolean;
  initialValues: SignInModel;
  onSubmit: (model: SignInModel) => void;
};

export default function useSignInForm(): ReturnType {
  const navigation = useNavigation<SignInNavigationProp<SignInRoutes.FORM>>();
  const initialValues = { email: '', password: '' };
  const isLoading = false;

  const onSubmit = (model: SignInModel) => {
    console.log('SignIn MODEL: ', model);
    navigation.navigate(SignInRoutes.SPLASH);
  };

  return {
    isLoading,
    initialValues,
    onSubmit
  };
}
