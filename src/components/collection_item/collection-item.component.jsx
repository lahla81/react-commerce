import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({ id, name, price, imageUrl, slug}) => (
    <div className='collection-item col-sm-6 col-lg-4 col-12'>
        <div className='overlay'>
            <div className="text-center c-latest__right">
                <img className="mt-2" src={imageUrl} alt={slug}/>
                <div className="h6 my-2 font-body-bold text-secondary">{name}</div>
                <h3 className="font-body-bold h4 text-primary my-4">{price}
                    <span className="text-success pr-1">جنيه</span>
                </h3>
                <div className="btn h5 btn-primary m-2 b-2">أضف الي السلة</div>
            </div>
        </div>
    </div>
)
export default CollectionItem;