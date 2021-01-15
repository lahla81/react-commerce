import React from 'react';
import CollectionItem from '../collection_item/collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview container'>
        <h1 className='mt-4 title font-body-bold h5 mb-3'>{title.toUpperCase()}</h1>
        <div className='preview row'>
            {items
                .filter((item, idx) => idx < 4)
                .map((item) => (
                <CollectionItem key={item.id} item={item}/>
            ))}
            
        </div>
    </div>
)
export default CollectionPreview