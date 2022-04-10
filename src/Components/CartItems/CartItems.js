import React from 'react';
import './CartItems.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CartItems = (props) => {
    const { name, img } = props.game;
    const { DeleteItem } = props;
    return (
        <div className='CartItems mt-3 mb-3'>
            <div className='img-div'>
                <img src={img} alt="" width="100px" />
            </div>
            <h6>{name}</h6>
            <button className='button-33' onClick={() => DeleteItem(props.game)}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
        </div>
    );
};

export default CartItems;