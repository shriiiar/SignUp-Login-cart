import React from 'react';
import Games from '../Games/Games';
import './IndividualGame.css'

const IndividualGame = (props) => {
    const { games, addToCart } = props;
    return (
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3">
            {
                games.map(items => <Games key={items.id} game={items} addToCart={addToCart}></Games>)
            }
        </div>
    );
};

export default IndividualGame;