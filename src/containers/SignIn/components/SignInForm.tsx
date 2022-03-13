import React from 'react';
import { Formik } from 'formik';
import AuthFormLayout from '../../../components/Layout/AuthFormLayout';
import { SignInRoutes } from '../../../navigation/AuthNavigation/routes';
import { SignInNavigationProp } from '../../../navigation/types';
import { SignInValidationSchema } from '../../../validation/AccountValidation';
import { Stack } from 'native-base';
import { Button, Input } from '../../../components/atoms';

const Content = {
  heading: 'Welcome back',
  subHeading: 'Enter your email address and password to continue.'
};

type Props = {
  navigation: SignInNavigationProp<SignInRoutes.FORM>;
};

const SignInFormContainer: React.FC<Props> = ({ navigation }) => {
  const initialValues = { email: '', password: '' };
  const isLoading = false;
  return (
    <AuthFormLayout heading={Content.heading} subHeading={Content.subHeading}>
      <Formik
        initialValues={initialValues}
        validationSchema={SignInValidationSchema}
        onSubmit={(model) => console.log('signin model: ', model)}
      >
        {(formik) => (
          <Stack space={10}>
            <Input
              placeholder="Email address"
              onChangeText={formik.handleChange('email')}
              onBlur={formik.handleBlur('email')}
              errorMessage={formik.errors.email}
              isInvalid={formik.errors.email ? true : false}
            />

            <Input
              secureTextEntry={true}
              placeholder="Password"
              onChangeText={formik.handleChange('password')}
              onBlur={formik.handleBlur('password')}
              errorMessage={formik.errors.password}
              isInvalid={formik.errors.password ? true : false}
            />

            <Button
              onPress={() => formik.handleSubmit()}
              loading={isLoading}
              disabled={
                isLoading || !formik.isValid || !formik.dirty ? true : false
              }
            >
              Sign in
            </Button>
          </Stack>
        )}
      </Formik>
    </AuthFormLayout>
  );
};

export default SignInFormContainer;
