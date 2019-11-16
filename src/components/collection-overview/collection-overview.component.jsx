import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { CollectionOwerviewContainer } from './collection-overview.styled';

import CollectionPreview from '../collection-preview/collection-preview.component';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';


const CollectionOverwiew = ({collections}) =>(
  <CollectionOwerviewContainer>
        {
          collections.map(({id, ...otherProps})=>(
            <CollectionPreview key={id} {...otherProps}/>
          ))
        }
      </CollectionOwerviewContainer>
)
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverwiew);