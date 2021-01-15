import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { togglrCaetHidden } from '../../redux/cart/cart.action';
import { selectCartItem } from '../../redux/cart/cart.selector';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

const CartDropDown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {   
                cartItems.length ?
                cartItems.map(cartItem => 
                    <CartItem key={cartItem.id} item={cartItem}/>
                    ) 
                :
                (<span className='mx-auto mt-5'>السلة فارغة</span>)
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(togglrCaetHidden())
        
        }}>اتمام عملية الشراء</CustomButton>
    </div>
)
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItem
})
export default withRouter(connect(mapStateToProps)(CartDropDown));