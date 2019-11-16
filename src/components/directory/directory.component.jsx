import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySection } from '../../redux/directory/directory.selector';
import MenuItem from '../menu-item/menu-item.component';
import { DirectoryContainer } from './directory.styled';

const Directory = ({sections})=>(

  <DirectoryContainer>
     {
       sections.map(({id, ...otherProps}) => 
       (<MenuItem 
            key={id}
            {...otherProps}
            />))
     }
  </DirectoryContainer>
)
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
})
export default connect(mapStateToProps)(Directory);