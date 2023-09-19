import * as yup from 'yup';

export const signInSchema = yup.object().shape({
  email: yup.string().required().email('This email is invalid'),
  password: yup.string().required('Password is required'),
});
