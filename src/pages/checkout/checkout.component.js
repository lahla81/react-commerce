import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItem, selectCartTotal } from '../../redux/cart/cart.selector';

import './checkout.styles.scss';
import CheckoutItem from '../../components/checout-item/checkout-item.component';

const CheckoutPage = ({cartItems, total}) => (
    <div className='container checkout-page'>
        <div className='checkout-header mt-5 pt-5'>
        <table className="table mt-4">
        <thead>
          <tr className='text-center'>
            <th>المنتج</th>
            <th>الوصف</th>
            <th>الكمية</th>
            <th>السعر</th>
            <th>حذف</th>
          </tr>
        </thead>
        {cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
        ))}
        <tfoot>
          <tr>
            <th className='text-center' colSpan="2" scope="row">المجموع</th>
            <td 
              colSpan="3" 
              className="table-active text-center luckiest-font">
              {total} 
              <span className='font-body-bold pr-2'>ج.م</span>
            </td>
          </tr>
        </tfoot>
      </table>
        </div>
    </div>
)
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItem,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);