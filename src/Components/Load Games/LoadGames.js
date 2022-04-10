import React, { useEffect, useState } from 'react';
import './LoadGames.css'
import fakeData from '../../Fake Data/fakeDb.JSON'
import IndividualGame from '../IndividualGame/IndividualGame';
import Cart from '../Cart/Cart';
import { addGame, getGames } from '../../Fake Data/FakeStorage';
import RandomItem from '../Random Item/RandomItem';
import { useNavigate } from 'react-router-dom';

const LoadGames = () => {

    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);
    const [random, setRandom] = useState([]);
    const [searchText, setSearchText] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetch(fakeData)
            .then(res => res.json())
            .then(data => {
                const match = data.filter(item => item.name.toLowerCase().includes(searchText));
                setData(match);
            })
    }, [searchText])

    useEffect(() => {
        const storedCart = getGames();
        setCart(storedCart);
    }, [])

    const addToCart = (game) => {
        const storedCart = addGame(game);
        setCart(storedCart);
    }

    const DeleteItem = (game) => {
        let newCart = [], index = 0;
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            newCart = JSON.parse(storedCart);
        }

        for (const items of newCart) {
            if (items.id === game.id) {
                break;
            }
            index++;
        }
        newCart.splice(index, 1);
        if (newCart.length !== 0) localStorage.setItem('cart', JSON.stringify(newCart));
        else localStorage.removeItem('cart');
        setCart(newCart);
    }

    const ramdomAdd = (localCart) => {

        const NewItem = localCart[Math.floor(Math.random() * localCart.length)];

        // console.log(NewItem);
        let newCart = [];
        newCart.push(NewItem);
        setRandom(newCart);
    }

    const emptyCart = () => {
        localStorage.removeItem('cart');
        setCart([]);
    }

    const textChange = (event) => {
        console.log(event.target.value);
        setSearchText(event.target.value);
    }

    const ToCheckOut = () => {
        navigate('/checkout');
    }

    return (
        <div>
            <input id='input-text' onChange={textChange} className='my-5' type="text" placeholder='Search gamers..' />
            <div className='row LoadGames'>
                <div className="col-lg-3">
                    <Cart cart={cart} fullCart={data} DeleteItem={DeleteItem} ramdomAdd={ramdomAdd} emptyCart={emptyCart}></Cart>
                    {
                        cart.length !== 0 &&
                        <>
                            <RandomItem random={random}></RandomItem>
                            <button onClick={ToCheckOut} className='button-33'>Proceed To Check Out</button>
                        </>
                    }
                </div>
                <div className="col col-md-12 col-lg-9 order-md-first">
                    <IndividualGame games={data} addToCart={addToCart}></IndividualGame>
                </div>
            </div>
        </div>
    );
};

export default LoadGames;