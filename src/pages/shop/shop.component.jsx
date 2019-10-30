import React from 'react';
import { Route } from 'react-router-dom';

import CollectionPage from '../collection-page/collection-page.component';
import CollectionOverwiew from '../../components/collection-overview/collection-overview.component';

import './shop.styles.scss';


const ShopPage = ({match}) =>{
    return(
      <div>
  <Route exact path={`${match.path}`} component={CollectionOverwiew}/>
  <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
    )
  }

export default ShopPage;