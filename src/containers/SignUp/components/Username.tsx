import { Formik } from 'formik';
import { Stack } from 'native-base';
import React from 'react';
import { Button, Input } from '../../../components/atoms';
import AuthFormLayout from '../../../components/Layout/AuthFormLayout';
import { SignUpRoutes } from '../../../navigation/AuthNavigation/routes';
import { SignUpNavigationProp } from '../../../navigation/types';
import { SignUpValidationSchema } from '../../../validation/AccountValidation';

const Content = {
  heading: 'Create username',
  subHeading: 'You can always change this later.'
};

type Props = {
  navigation: SignUpNavigationProp<SignUpRoutes.USERNAME>;
};

const SignUpUsernameContainer: React.FC<Props> = ({ navigation }) => {
  const initialValues = { username: '' };
  const isLoading = false;
  return (
    <AuthFormLayout heading={Content.heading} subHeading={Content.subHeading}>
      <Formik
        initialValues={initialValues}
        validationSchema={SignUpValidationSchema.USERNAME}
        onSubmit={(model) => console.log('signin model: ', model)}
      >
        {(formik) => (
          <Stack space={10}>
            <Input
              placeholder="Username"
              onChangeText={formik.handleChange('username')}
              onBlur={formik.handleBlur('username')}
              errorMessage={formik.errors.username}
              isInvalid={formik.errors.username ? true : false}
            />

            <Button
              onPress={() => formik.handleSubmit()}
              loading={isLoading}
              disabled={
                isLoading || !formik.isValid || !formik.dirty ? true : false
              }
            >
              Sign up
            </Button>
          </Stack>
        )}
      </Formik>
    </AuthFormLayout>
  );
};

export default SignUpUsernameContainer;
