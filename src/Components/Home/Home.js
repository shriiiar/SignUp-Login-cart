import React from 'react';
import './Home.css'
import logo from '../../img/pngegg.png'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    let showOnly3 = 1, navigate = useNavigate();
    const toGameverse = () => {
        let path = '/gameverse';
        navigate(path);
    }
    return (
        <div>
            <div className='row mt-5 p-5'>
                <div className='col-sm-12 col-md-12 col-lg-6 order-lg-first column-first mt-5'>
                    <h1 className='text-start'>Republic Of <br />Gamers</h1>
                    <p className='text-start'>Republic of Gamers is a brand used by Asus since 2006, encompassing a range of computer hardware, personal computers, peripherals, and accessories oriented primarily toward PC gaming. The line includes both desktops and high-spec laptops such as the Asus ROG Crosshair V Formula-Z Motherboard or the Asus ROG Strix G G731GT AU059T Laptop</p>
                    <div className='column-first-btn'>
                        <button onClick={() => toGameverse()} className='button-33'>To Gameverse</button>
                    </div>
                </div>
                <div className='col-sm-12 col-md-12 col-lg-6 order-first order-xs-first column-second'>
                    <img src={logo} alt="" className='img-fluid' width="600px" />
                </div>
            </div>
        </div>
    );
};

export default Home;