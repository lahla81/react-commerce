import React from 'react';
import { withRouter } from 'react-router-dom';
import CollectionItem from '../collection_item/collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items, history, match, routeName }) => (
    <div className='collection-preview container'>
        <h3 
            onClick={() => history.push(`${match.path}/${routeName}`)}
            className='mt-4 mr-auto cursor-pointer title font-body-bold mb-3'>
            {title.toUpperCase()}
        </h3>
        <div className='preview row'>
            {items
                .filter((item, idx) => idx < 4)
                .map((item) => (
                <CollectionItem key={item.id} item={item}/>
            ))}
        </div>
        <h5 
            onClick={() => history.push(`${match.path}/${routeName}`)}
            className='mt-4 mr-auto cursor-pointer title font-body-bold mb-3'>
            Click here for more <span className="text-primary h4"> {title.toUpperCase()} </span> Product
        </h5>
    </div>
)
export default withRouter(CollectionPreview)