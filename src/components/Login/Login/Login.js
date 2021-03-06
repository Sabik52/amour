
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css'
import SocialLogin from './SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Sppiner from '../../Shared/Spinner/Sppiner';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

      if(loading || sending){
          return <Sppiner></Sppiner>
      }

      if(user){
          
      }


    const handleSubmit = async event => {
        event.preventDefault ();
        const email = emailRef.current.value;
        const password  = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password)
        const {data} = await axios.post('https://thawing-basin-93769.herokuapp.com/login', {email})
        
        localStorage.setItem('accessToke', data.accessToken);
        navigate(from, {replace: true});
    }

    const navigateRegister = event => {
        navigate('/register')

    }
    const resetPassword = async() => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        toast('Sent email')
    }
    return (
        <div className='login-container'>
            <h2>Please Login</h2>
            <Form onSubmit={handleSubmit} className='login'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <button className='login-btn'>Login</button>
            </Form>
            <p >Don't have an account? <span className='reg-text' onClick={navigateRegister}>Register Here</span></p>
            <p>Forget Password? <button className='btn btn-link text-decoration-none ' onClick={resetPassword}> Reset Password</button> </p>
            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;