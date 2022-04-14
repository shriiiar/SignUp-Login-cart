import React, { useRef, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import './Signup.css';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import { async } from '@firebase/util';
import SocialLogin from '../Social Login/SocialLogin';

const auth = getAuth(app);

const Signup = () => {

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');
    const [errorMessage, setErrorMessage] = useState('');
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, ] = useUpdateProfile(auth);
    const [email, setEmail] = useState('');
    const [sendEmailVerification, sending, sendingError] = useSendEmailVerification(
        auth
    );
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathanme || '/';

    const checkAgree = () => {
        if (agree === false) setAgree(true);
        else setAgree(false);
    }
    if (user) {
        navigate(from, { replace: true });
    }
    const eventSubmit = async (event) => {
        event.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        setErrorMessage('');
        console.log(name, email, password, confirmPassword);

        if (password !== confirmPassword) {
            setErrorMessage('Password did not match');
        }
        if (!agree) {
            toast("Please Agree our terms & conditions");
            return;
        }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        await sendEmailVerification(email);
        if (sending) {
            toast('Email Verification Sent');
            return;
        }
        if (error) {
            setErrorMessage(error.message);
            return;
        }
        console.log(user);
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title mb-5'>Sign Up</h2>
                <form onSubmit={eventSubmit}>
                    <div className="input-group">
                        <label htmlFor='name'>Name</label>
                        <input ref={nameRef} type="name" name="name" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor='email'>Email</label>
                        <input ref={emailRef} type="email" name="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor='password'>Password</label>
                        <input ref={passwordRef} type="password" name="password" />
                    </div>
                    <div className="input-group">
                        <label htmlFor='confirm-password'>Password</label>
                        <input ref={confirmPasswordRef} type="password" name="confirm-password" required />
                    </div>
                    <input onClick={checkAgree} className='mb-3' type="checkbox" name="terms" id="" />
                    <label className={`ps-2 ${agree ? 'text-success' : 'text-danger'}`} htmlFor='terms'>Accepct terms and conditions</label>
                    <input className='form-submit' type="submit" required value="Signup" />
                </form>
                <ToastContainer />
                <p className='my-3 fs-6 text-danger'>{errorMessage}</p>
                <p className='my-3 fs-5'>
                    Already have an account? <Link className='form-link' to='/login'>Login</Link>
                </p>
                <hr />
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Signup;