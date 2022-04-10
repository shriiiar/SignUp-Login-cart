import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Signup.css';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import app from '../../firebase.init'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSign } from "@fortawesome/free-solid-svg-icons";

const auth = getAuth(app);
const EventGoogleProvider = new GoogleAuthProvider();

const Signup = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    // const EventGoogleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathanme || '/checkout';

    const EventBlurEmail = (event) => {
        setEmail(event.target.value);
    }
    const EventBlurName = (event) => {
        setName(event.target.value);
    }
    const EventBlurPassword = (event) => {
        setPassword(event.target.value);
    }
    const EventBlurConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
        }).catch((error) => {
            setErrorMessage(error.message);
        });
    }
    const EventSubmit = (event) => {
        event.preventDefault();
        setErrorMessage('');
        console.log(email, password, confirmPassword);
        if (password !== confirmPassword) {
            setErrorMessage('Passwords did not match')
            return;
        }
        if (password.length <= 5) {
            setErrorMessage('Password have atleast 6 characters')
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                console.log(user, email, password);
                setErrorMessage("Sign Up Successful");
                setUserName();
                navigate(from, { replace: true });
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    }
    const EventGoogleSignUp = () => {
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
                <h2 className='form-title mb-5'>Sign Up</h2>
                <form onSubmit={EventSubmit}>
                    <div className="input-group">
                        <label htmlFor='name'>Name</label>
                        <input onBlur={EventBlurName} type="name" name="name" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor='email'>Email</label>
                        <input onBlur={EventBlurEmail} type="email" name="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor='password'>Password</label>
                        <input onBlur={EventBlurPassword} type="password" name="password" />
                    </div>
                    <div className="input-group">
                        <label htmlFor='confirm-password'>Password</label>
                        <input onBlur={EventBlurConfirmPassword} type="password" name="confirm-password" required />
                    </div>
                    <p className='my-3 text-danger'>{errorMessage}</p>
                    <input className='form-submit' type="submit" required value="Signup" />
                </form>
                <p className='my-3 fs-5'>
                    Already have an account? <Link className='form-link' to='/login'>Login</Link>
                </p>
                <hr />
                <button onClick={EventGoogleSignUp} className='form-submit border-0'><FontAwesomeIcon icon={faSign}></FontAwesomeIcon> Continue With Google</button>
            </div>
        </div>
    );
};

export default Signup;