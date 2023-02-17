import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import LoginIllustration from '../../components/Icons/LoginIllustration'
import LogoIcon from '../../components/Icons/LogoIcon'
import Input from '../../components/Shared/Input'
import Button from '../../components/Shared/Button/Index'
import '../Login/login.scss'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { login } from "../../store/slices/auth/loginSlice";
import { useAppDispatch } from "../../store/hooks";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Email is invalid").required("Please enter your email"),
  password: Yup.string().required("Please enter your password"),
});

interface LoginValues {
  email: string;
  password: string;
}

const Index = () => {
  
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [inputType, setInputType] = useState('password');
  const dispatch = useAppDispatch();

  const handleToggle = () => {
    if(inputType === "password") {
      setInputType('text')
      setIsVisible(!isVisible)
    } else {
      setInputType('password')
      setIsVisible(!isVisible)
    }
  }

  const initialValues: LoginValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values: LoginValues, { setSubmitting, resetForm }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }) => {
    try {      
      const { email, password } = values;
    await dispatch(login(values));
      navigate('/dashboard');
    } catch {
      toast.error("Incorrect email or password");
    } finally {
      setSubmitting(false);
      resetForm();
    }
  };
  

  return (
    <section className='login__wrapper'>
      <LogoIcon />
      <div className='login__content' >
        <LoginIllustration />
        <div>
          <h1>Welcome!</h1>
          <article>Enter details to login.</article>
          <Formik initialValues={initialValues} validationSchema={LoginSchema} onSubmit={handleSubmit}>
            {({ isSubmitting }) => (
              <Form>
                <Field
                  name='email'
                  type='email'
                  placeholder='Email'
                  className ='input__styles'
                />
                <ErrorMessage name='email' render={msg => <div className="error">{msg}</div>} />

                <Field
                  name='password'
                  type='password'
                  placeholder='Password'
                  className='input__styles'
                  
                />
                <ErrorMessage name='password' render={msg => <div className="error">{msg}</div>} />

                <div className='forgot__password'>
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
