import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    console.log('fsj', props)
    const {img,name,seller,price,stock} = props.product;
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={img} alt=""/>
            </div>
            <div >
                <h4 className='product-name'>{name}</h4>
                <p><small>by:{seller}</small></p>
                <h3>Price: ${price}</h3>
                <p><small>Only {stock} available in stock</small></p>
                <button 
                 className='add-btn'
                 onClick ={()=> props.handelAddProduct(props.product)}
                 >
              <FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
            </div>
            
        </div>
    );
};

export default Product;