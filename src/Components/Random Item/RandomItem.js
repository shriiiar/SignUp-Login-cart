import React from 'react';
import './RandomItem.css'

const RandomItem = (props) => {

    if (props.random[0] !== undefined && props.random.length !== 0) {
        const { name, img, price } = props.random[0];
        return (
            <div className='RandomItem'>
                <h5>Randomly Choosed</h5>
                <div className='img-div'>
                    <img src={img} alt="" width="100px" />
                </div>
                <h5>{name}</h5>
                <h6>Price: <span>${price}</span></h6>
            </div>
        );
    }
    else {
        return (
            <div>

            </div>
        );
    }
};

export default RandomItem;