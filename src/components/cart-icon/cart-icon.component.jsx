import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/original.svg';
import { togglrCaetHidden } from '../../redux/cart/cart.action';
import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden }) => (
    <div 
        className='btn btn-outline-primary mx-2 cart-icon'
        onClick={ toggleCartHidden }
        >
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
)
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(togglrCaetHidden())
})

export default connect(null, mapDispatchToProps )(CartIcon);