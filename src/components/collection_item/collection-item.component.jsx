import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.action';
import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
    const{ name, price, imageUrl, slug } = item;
    return(
        <div className='collection-item col-sm-6 col-lg-3 col-12'>
            <div className='overlay'>
                <div className="text-center c-latest__right">
                    <img className="mt-2" src={imageUrl} alt={slug}/>
                    <div className="h6 my-2 font-body-bold text-secondary">{name}</div>
                    <h3 className="h5 luckiest-font text-primary my-4">{price}
                        <span className="text-success font-body-bold pr-1">جنيه</span>
                    </h3>
                    <CustomButton onClick={() => addItem(item)}>أضف الي السلة</CustomButton>
                </div>
            </div>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);