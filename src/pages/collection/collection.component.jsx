import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection_item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selector';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection
    return(
        <div className='collection-page'>
            <h2 className='title text-center text-primary font-body-bold'>{title}</h2>
                <div className='row mt-3'>
                    {items.map(item => (
                        <CollectionItem key={item.id} item={item}/>
                    ))}
                </div>
        </div>
)}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);