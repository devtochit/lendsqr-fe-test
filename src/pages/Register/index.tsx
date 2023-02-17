import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import LoginIllustration from '../../components/Icons/LoginIllustration';
import LogoIcon from '../../components/Icons/LogoIcon';
// import Input from '../../components/Shared/Input';
import Button from '../../components/Shared/Button/Index';
import '../Register/register.scss';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register } from '../../store/slices/auth/registerationSlice';
import { useAppDispatch } from '../../store/hooks';

interface RegistrationValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegistrationSchema = Yup.object().shape({
  firstName: Yup.string().required('Please enter your first name'),
  lastName: Yup.string().required('Please enter your last name'),
  email: Yup.string().email('Email is invalid').required('Please enter your email'),
  password: Yup.string().required('Please enter your password'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Passwords do not match')
    .required('Please confirm your password'),
});

const Index = () => {
  const dispatch = useAppDispatch();
  const initialValues: RegistrationValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  
  const handleSubmit = async (values: RegistrationValues, { setSubmitting, resetForm }: { setSubmitting: (isSubmitting: boolean) => void, resetForm: () => void }) => {
    const { firstName, lastName, email, password } = values;
    await dispatch(register({ data: { firstName, lastName, email, password } }));
    console.log(values);
    setSubmitting(false);
    resetForm();
  };
  
  return (
    <section className='login__wrapper'>
      <LogoIcon />
      <div className='login__content' >
        <LoginIllustration />
        <div>
          <h1>Welcome!</h1>
          <article>Enter details to login.</article>
          <Formik initialValues={initialValues} validationSchema={RegistrationSchema} onSubmit={handleSubmit}>
            {({ isSubmitting }) => (
              <Form>
                <Field
                  name='firstName'
                  type='text'
                  placeholder='firstName'
                  className='input__styles'
                  
                />
                <ErrorMessage name='firstName' render={msg => <div className="error">{msg}</div>} />

                <Field
                  name='lastName'
                  placeholder='lastName'
                  type='text'
                  className='input__styles'

                />
                <ErrorMessage name='lastName' render={msg => <div className="error">{msg}</div>} />

                <Field
                  name='email'
                  placeholder='Email'
                  type='email'
                  className='input__styles'

                />
                <ErrorMessage name='email' render={msg => <div className="error">{msg}</div>} />

                <Field
                  name='password'
                  placeholder='Password'
                  type='password'
                  className='input__styles'

                />
                <ErrorMessage name='password' render={msg => <div className="error">{msg}</div>} />

                <Field
                  name='confirmPassword'
                  placeholder='confirmPassword'
                  type='password'
                  className='input__styles'

                />
                <ErrorMessage name='confirmPassword' render={msg => <div className="error">{msg}</div>} />

                <div className='forgot__password'>
                  <a href="#">Forgot Password</a>
                  <a href="#">Forgot Password</a>
                </div>

                <Button children={'Log In'} type="submit" background={'bg__cyan'} text_transform={'text__transform'} padding={'btn__padding'}
                 disabled={isSubmitting} 
                 />

              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  )
}

export default Index;
