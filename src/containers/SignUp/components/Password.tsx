import React from 'react';
import AuthFormLayout from '../../../components/Layout/AuthFormLayout';
import { SignUpRoutes } from '../../../navigation/AuthNavigation/routes';
import { SignUpNavigationProp } from '../../../navigation/types';

type Props = {
  navigation: SignUpNavigationProp<SignUpRoutes.PASSWORD>;
};

const SignUpPasswordContainer: React.FC<Props> = ({ navigation }) => {
  return <AuthFormLayout heading="Create password"></AuthFormLayout>;
};

export default SignUpPasswordContainer;
