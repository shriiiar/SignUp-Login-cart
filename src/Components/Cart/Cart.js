import React from 'react';
import { getGames } from '../../Fake Data/FakeStorage';
import CartItems from '../CartItems/CartItems';
import './Cart.css'

const Cart = (props) => {
    const { cart, DeleteItem, ramdomAdd, emptyCart } = props;

    let localCart = getGames();

    return (
        <div className='cart text-center mb-3'>
            <h4>Cart Items</h4>
            {
                cart.map(items => <CartItems key={items.id} game={items} DeleteItem={DeleteItem}></CartItems>)
            }
            <div className='mb-3 cart-btn'>
                {
                    localCart.length !== 0 && <>
                        <button class='button-33 choose-btn mt-3' onClick={() => ramdomAdd(localCart)}>Choose For me</button>
                        <button class='button-33 empty-btn' onClick={() => emptyCart()}>Empty Cart</button></>
                }
            </div>
        </div>
    );
};

export default Cart;