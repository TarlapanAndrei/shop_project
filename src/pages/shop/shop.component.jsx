import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionPage from '../collection-page/collection-page.component';
import CollectionOverwiew from '../../components/collection-overview/collection-overview.component';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase-utils';
import {UpdateCollections} from '../../redux/shop/shop.action'
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverwiew);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component{
  state = {
   loading: true
  }
  unsubscribeFromSnapshot = null
  componentDidMount(){
    const { upDateCollection } = this.props;
    const collectionRef = firestore.collection('collections');
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapShot =>{
      const collectionsMap = convertCollectionsSnapshotToMap(snapShot)
      upDateCollection(collectionsMap)
      this.setState({
        loading: false
      })
    })
  }
  render(){
    const {match} = this.props
    const { loading } = this.state;
    return(
      <div>
  <Route exact path={`${match.path}`} render={(props)=> <CollectionOverviewWithSpinner isLoading={loading} {...props}/>}/>
  <Route path={`${match.path}/:collectionId`} render={(props)=><CollectionPageWithSpinner isLoading={loading} {...props}/>} />
      </div>
    )
  }}
const mapDispatchToProps = dispatch =>({
  upDateCollection:collectionsMap=> dispatch(UpdateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);