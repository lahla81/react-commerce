import React from 'react';
import CollectionItem from '../collection_item/collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview container'>
        <h1 className='title font-body-bold h5 mb-3'>{title.toUpperCase()}</h1>
        <div className='preview row'>
            {items
                .filter((item, idx) => idx < 4)
                .map(({id, ...otherItemProps}) => (
                <CollectionItem key={id} {...otherItemProps}/>
            ))}
            
        </div>
    </div>
)
export default CollectionPreview