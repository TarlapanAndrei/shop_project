import React from 'react';

import { CollectionPreviewContainer, Preview, Title} from './collection-preview.styled';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({title, items}) =>(
  <CollectionPreviewContainer>
     <Title>{title.toUpperCase()}</Title>
     <Preview>
       {
         items.filter((item, index)=> index < 4).map(item =>(
           <CollectionItem key={item.id} item={item}/>
         ))
       }
     </Preview>
  </CollectionPreviewContainer>
)
export default CollectionPreview;