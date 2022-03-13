import * as Yup from 'yup';

export const SignInValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email required'),
  password: Yup.string()
    .required('Password required')
    .min(8, 'Password is too short - must be 8 characters minimum')
});

export const SignUpValidationSchema = {
  EMAIL: Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email required')
  }),
  PASSWORD: Yup.object().shape({
    password: Yup.string()
      .required('Password required')
      .min(8, 'Password is too short - must be 8 characters minimum')
  }),
  USERNAME: Yup.object().shape({
    username: Yup.string().required('Username required')
  })
};
