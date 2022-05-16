import React from 'react';
import './SocialLogin.css'
import google from '../../../../images/logo/google.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Sppiner from '../../../Shared/Spinner/Sppiner';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let errorMessage;

 
    if(error){
        
           errorMessage = <div>
                <p>Error: {error.message}</p>
            </div>
      
    }
   

    if(user){
        navigate('/home')

    }
    return (
        <div className='or-line'>
            <div className='line'>
                <div className='line1'></div>
                <p>or</p>
                <div className='line2'></div>
            </div>
            {errorMessage}
            <div>
                <button
                onClick={()=> signInWithGoogle()} className='google-btn'> <img src={google} alt="" /> Sign In With Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;