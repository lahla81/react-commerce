import React from 'react';

import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

class shopPage extends React.Component {
    constructor(prop){
    super(prop)
        this.state = {
            collection: SHOP_DATA
        }
    }
    render() {
        const {collection} =this.state;
        return (
            <div className='shop-page'>
            {
                collection.map(({id, ...otherCollectionProps}) =>(
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))
            }
                SHOP PAGE
            </div>
        );
    }
}

export default shopPage