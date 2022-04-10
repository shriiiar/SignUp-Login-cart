import { getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';

const auth = getAuth(app);

const CheckOut = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [adress, setAdress] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [user] = useAuthState(auth);

    const EventBlurEmail = (event) => {
        setEmail(event.target.value);
    }
    const EventBlurName = (event) => {
        setName(event.target.value);
    }
    const EventBlurAdress = (event) => {
        setAdress(event.target.value);
    }
    const EventBlurPhoneNum = (event) => {
        setPhoneNum(event.target.value);
    }
    const EventSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title mb-5'>Check Out</h2>
                <form onSubmit={EventSubmit}>
                    <div className="input-group">
                        <label htmlFor='name'>Name</label>
                        <input value={user?.displayName} onBlur={EventBlurName} type="name" name="name" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor='email'>Email</label>
                        <input value={user?.email} onBlur={EventBlurEmail} type="email" name="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor='adress'>Adress</label>
                        <input onBlur={EventBlurAdress} type="text" name="adress" />
                    </div>
                    <div className="input-group">
                        <label htmlFor='phoneNum'>Phone Number</label>
                        <input onBlur={EventBlurPhoneNum} type="number" name="phoneNum" required />
                    </div>
                    <p className='my-3 text-danger'>{errorMessage}</p>
                    <input className='form-submit' type="submit" required value="Check Out" />
                </form>
            </div>
        </div>
    );
};

export default CheckOut;