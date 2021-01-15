import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as ShoppingIcon } from '../../assets/original.svg';
import { togglrCaetHidden } from '../../redux/cart/cart.action';
import { selectCartItemCount } from '../../redux/cart/cart.selector';
import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div 
        className='btn btn-outline-primary mx-2 cart-icon'
        onClick={ toggleCartHidden }
        >
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemCount
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(togglrCaetHidden())
})

export default connect(mapStateToProps, mapDispatchToProps )(CartIcon);