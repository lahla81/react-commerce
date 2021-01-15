import React from 'react';

import './cart-item.styles.scss';

const CartItem =({ item: { imageUrl, price, name, slug, quantity }}) => (
    <div className='cart-item'>
        <img src={imageUrl} alt={slug} />
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} × {price}ج.م</span>
        </div>
    </div>
)
export default CartItem;