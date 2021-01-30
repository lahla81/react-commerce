import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import {updateCollections} from '../../redux/shop/shop.actions';

import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionPage from '../../pages/collection/collection.component';
import CollectionOverview from '../collection-overview/collection-overview.component';
import './shop.styles.scss';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component{
    state = {
        loading: true
    }
    unsbscribeFromSnapshot = null;

    componentDidMount(){
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
            
        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            console.log(collectionsMap)
            updateCollections(collectionsMap)
        })
           
    }
    render(){
        const { match } = this.props;
        const { loading } = this.state;
        return(
            <div className='shop-page container'>
                <Route exact path={`${match.path}`} 
                    render = {props => (
                        <CollectionsOverviewWithSpinner 
                            isLoading = {loading} {...props} 
                        />
                    )} 
                />
                <Route path={`${match.path}/:collectionId`} 
                    render = {props => (
                        <CollectionPageWithSpinner 
                            isLoading = {loading} {...props} 
                        />
                    )} 
                />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
})

export default connect(
    null, 
    mapDispatchToProps
)(ShopPage);