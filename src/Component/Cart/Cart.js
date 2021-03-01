import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, prd)=> total+ prd.price, 0 )
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const prd = cart[i];
        total = total + prd.price;
    }

    let shipping = 0;
    if(total > 35){
        shipping = 0
    }
    else if(total > 15){
        shipping = 4;
    }else if(total > 0){
        shipping = 12;
    }
    
    let tax = total / 10;
    let grandTotal = Math.floor(total + shipping + tax)
    return (
        <div>
            <h3>Order summary</h3>
            <h4>items: {cart.length}</h4>
            <h4>shipping cost: {shipping}</h4>
            <p>tax:{tax}</p>
            <h4>Total: {total + shipping}</h4>
            <h3>Total price:{grandTotal}</h3>
        </div>
    );
};

export default Cart;