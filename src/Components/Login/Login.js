import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
// import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import app from '../../firebase.init'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSign } from "@fortawesome/free-solid-svg-icons";

const auth = getAuth(app);
const EventGoogleProvider = new GoogleAuthProvider();


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathanme || '/checkout';


    const EventBlurEmail = (event) => {
        setEmail(event.target.value)
    }
    const EventBlurPassword = (event) => {
        setPassword(event.target.value)
    }
    const EventSubmit = (event) => {
        event.preventDefault();
        setErrorMessage('');
        console.log(email, password);

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user, email, password);
                setErrorMessage("Sign In Successful");
                navigate(from, { replace: true });
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    }
    const EventGoogleSignIn = () => {
        signInWithPopup(auth, EventGoogleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            }).catch((error) => {
                setErrorMessage(error.message);
            });
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title mb-5'>Login</h2>
                <form onSubmit={EventSubmit}>
                    <div className="input-group">
                        <label htmlFor='email'>Email</label>
                        <input onBlur={EventBlurEmail} type="email" name="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor='password'>Password</label>
                        <input onBlur={EventBlurPassword} type="password" name="password" />
                    </div>
                    <p className='my-3 text-danger'>{errorMessage}</p>
                    <input className='form-submit' type="submit" required value="Login" />
                </form>
                <p className='my-3 fs-5'>
                    New User? <Link className='form-link' to='/signup'>Sign Up</Link>
                </p>
                <hr />
                <button onClick={EventGoogleSignIn} className='form-submit border-0'><FontAwesomeIcon icon={faSign}></FontAwesomeIcon> Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;