import React, { useState } from 'react'
import LogoIcon from '../constants/LogoIcon'
import LoginIcon from '../constants/LoginIcon'
// import '../saas/Login/login.scss'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import InputField from '../components/constants/InputField'
import Button from '../components/constants/Button'


export default function Login() {

    const router = useNavigate();
    const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
    const [showPassword, setShowPassword] = useState<boolean>(false)

   const handleVisibility = () => {
    if(showPassword) {
        setShowPassword(!showPassword)
    } else {
      setShowPassword(!showPassword)
    }
  }


    const handleChange = (event: any) => {
        const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value
    }));
    }



    const handleLogin = (event: any) => {
        event.preventDefault();

        if(formData.email === "" || formData.password === "") {
            return toast.error("Fields cant be empty")
        }
        // Handle Login

        router('/dashboard')
    }


  return (
    <div className='login-container'>
      <LogoIcon />
      <div className='login-area'>
        <LoginIcon />
        <div>
            <h1>Welcome!</h1>
            <p>Enter details to login.</p>
            <div><Toaster/></div>
            <form onSubmit={(event) => {handleLogin(event)}}>
                <InputField 
                name={'email'}
                value={formData.email}
                type='email'
                handleChange={(event) => handleChange(event)}
                />
                <InputField 
                name={'password'}
                value={formData.password}
                type={showPassword ? 'text': 'password'}
                handleChange={(event) => handleChange(event)}
                placeholder={'Password'}
                inputClass={'input-class'}
                variable_x={!showPassword ? 'SHOW' : 'HIDE'}
                onClick={handleVisibility}
                component__wrap={'password__styles'}
                />
                
                <div className='forgot-password'>
                    <a href="#">Forgot Password</a>
                </div>
                <Button children={'Log In'} type="submit" background={'bg-cyan'} text_transform={'text__transform'} padding={'btn-padding'} />

            </form>
        </div>
      </div>
    </div>
  )
}
