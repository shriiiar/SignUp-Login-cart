import React, { useState } from 'react';
import './SocialLogin.css';
import googleLogo from '../../img/google-logo-9824.png'
import githubLogo from '../../img/github-logo.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth(app);

const SocialLogin = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathanme || '/';
    let errorElement;
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    if (user || gitUser) {
        navigate(from, { replace: true });
    }
    if (error || gitError) {
        errorElement = <div>
            <p className='text-danger'>{error?.message}{gitError?.message}</p>
        </div>
    }
    return (
        <div className='row'>
            {errorElement}
            <div className="col-12 mb-3"><button onClick={() => signInWithGoogle()} className='social-submit border-0'>Continue With <img className='img-fluid' src={googleLogo} width="40px" alt="" /></button></div>
            <div className="col-12 mb-3"><button onClick={() => signInWithGithub()} className='social-submit border-0'>Continue With <img className='img-fluid' src={githubLogo} width="40px" alt="" /></button></div>
        </div>
    );
};

export default SocialLogin;