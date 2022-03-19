import React from 'react';
import { Formik } from 'formik';
import { Stack } from 'native-base';
import { Button, Input } from '../../../components/atoms';
import AuthFormLayout from '../../../components/Layout/AuthFormLayout';
import { SignUpRoutes } from '../../../navigation/AuthNavigation/routes';
import { SignUpNavigationProp } from '../../../navigation/types';
import { SignUpValidationSchema } from '../../../validation/AccountValidation';
import useUsername from '../hooks/useUsername';

const Content = {
  heading: 'Create username',
  subHeading: 'You can always change this later.'
};

const SignUpUsernameContainer: React.FC = () => {
  const { isLoading, initialValues, onSubmit } = useUsername();

  return (
    <AuthFormLayout heading={Content.heading} subHeading={Content.subHeading}>
      <Formik
        initialValues={initialValues}
        validationSchema={SignUpValidationSchema.USERNAME}
        onSubmit={onSubmit}
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
