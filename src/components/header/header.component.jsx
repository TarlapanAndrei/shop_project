import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { ReactComponent as Logo} from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase-utils';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectToggleHidden } from '../../redux/cart/cart.selectors';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { OptionDiv, OptionLink, OptionsDiv, LogoContainer, HeaderContainer } from './header.styles';

const Header = ({currentUser, hidden}) =>(
  <HeaderContainer>
  <LogoContainer to="/" ><Logo className='logo'/></LogoContainer>
   <OptionsDiv>
     <OptionLink to='/shop'>
       SHOP
     </OptionLink>
     <OptionLink to='/shop'>
       CONTACT
     </OptionLink>
     {
       currentUser ?
       <OptionDiv onClick={()=>auth.signOut()}>
          SIGN OUT
       </OptionDiv> 
       :
         <OptionLink to='/sign'>
       SIGN IN
     </OptionLink>
     }
     <CartIcon />
   </OptionsDiv>
   {
     hidden ? null : <CartDropdown />
   }
  </HeaderContainer>
)
const mapStateToProps= createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectToggleHidden
})
export default connect(mapStateToProps)(Header);