import React from 'react';
import { connect } from 'react-redux';

import {addItem, ClearItemFromCart, removeItem} from '../../redux/cart/cart.action';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const {imageUrl, price, name, slug, quantity} = cartItem;
    return(
        <tbody>
            <tr className='checkout-tr font-body-bold text-center'>
                <td className='text-center'>
                    <img className='checkout-item-img' src={imageUrl} alt={slug}/>
                </td>
                <td>
                    {name}
                </td>
                <td>
                <span className='pl-3 cursor-pointer' onClick={() => addItem(cartItem)}>&#10094;</span>
                <span className='luckiest-font'>{quantity}</span>    
                <span className='pr-3 cursor-pointer' onClick={() => removeItem(cartItem)}>&#10095;</span>
                </td>
                <td className='luckiest-font'>
                    {price}
                </td>
                <td>
                    <div
                        className='cursor-pointer btn btn-danger py-1 px-2' 
                        onClick={() => clearItem(cartItem)}>
                        &#10006;
                    </div> 
                </td>
            </tr>
        </tbody>
    )
};
const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(ClearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})
export default connect(null, mapDispatchToProps)(CheckoutItem);