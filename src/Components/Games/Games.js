import React from 'react';
import './Games.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Games = (props) => {

    const { name, price, img } = props.game;
    const { addToCart } = props;

    return (
        <div className='games p-0 mb-3'>
            <div className='img-div'>
                <img src={img} alt="" width="200px" />
            </div>
            <h5>{name}</h5>
            <h6>Price: <span>${price}</span></h6>
            <button class='button-33' onClick={() => addToCart(props.game)}>Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </button>
        </div>
    );
};

export default Games;