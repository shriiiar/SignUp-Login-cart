const addGame = (game) => {
    let cart = [], flag = 0;
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    for (const items of cart) {
        if (items.id === game.id) {
            flag = 1;
            break;
        }
    }
    if (flag === 0) {
        cart.push(game);
    }
    localStorage.setItem('cart', JSON.stringify(cart));

    return cart;
}

const getGames = () => {
    let cart = [];
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    return cart;
}

export {
    addGame,
    getGames,
}