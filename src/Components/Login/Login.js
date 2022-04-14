import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
// import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import app from '../../firebase.init'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSign } from "@fortawesome/free-solid-svg-icons";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useUpdatePassword } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { async } from '@firebase/util';
import SocialLogin from '../Social Login/SocialLogin';


const auth = getAuth(app);
const EventGoogleProvider = new GoogleAuthProvider();


const Login = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathanme || '/';
    const [updatePassword, updating, passError] = useUpdatePassword(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
    );
    let errorElement;

    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        signinError,
    ] = useSignInWithEmailAndPassword(auth);
    const eventSetEmail = (event) => {
        setEmail(event.target.value);
        console.log(email);
    }
    const resetPassword = async () => {
        console.log(email);
        if (email !== '') {
            await sendPasswordResetEmail(email);
            toast('Email Sent');
        }
    }
    if (user) {
        navigate(from, { replace: true });
    }
    const EventSubmit = async (event) => {
        event.preventDefault();
        const password = passwordRef.current.value;
        const email = emailRef.current.value;
        await signInWithEmailAndPassword(email, password);
        console.log(email, password);
        if (signinError) {
            toast("Invalid Email Or Password");
        }
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title mb-5'>Login</h2>
                {errorElement}
                <form onSubmit={EventSubmit}>
                    <div className="input-group">
                        <label htmlFor='email'>Email</label>
                        <input onBlur={eventSetEmail} ref={emailRef} type="email" name="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor='password'>Password</label>
                        <input ref={passwordRef} type="password" name="password" />
                    </div>
                    <input className='form-submit' type="submit" required value="Login" />
                </form>
                <p className='my-3 fs-5'>
                    Already have an account? <button className='form-link bg-transparent border-0' onClick={resetPassword}>Reset Password</button>
                </p>
                <p className='my-3 fs-5'>
                    New User? <Link className='form-link' to='/signup'>Sign Up</Link>
                </p>
                <hr />
                <SocialLogin></SocialLogin>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;