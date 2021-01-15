import React from 'react';
import { Route } from 'react-router-dom';
import CollectionPage from '../../pages/collection/collection.component';

import CollectionOverview from '../collection-overview/collection-overview.component';

import './shop.styles.scss';

const ShopPage = ({ match }) => (
        <div className='shop-page container'>
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    );

export default ShopPage;