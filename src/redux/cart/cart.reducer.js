import { cartActionType } from './cart.types';
import { addItemToCart, minusItem } from './cart.utilities';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
}
const cartReducer = (state=INITIAL_STATE, action)=>{
  switch(action.type){
    case cartActionType.HIDDEN_TOGGLE:
      return {
        ...state, hidden: !state.hidden
      }
    case cartActionType.ADD_ITEM:
      return {
        ...state, cartItems: addItemToCart(state.cartItems, action.payload)
      }
    case cartActionType.REMOVE_ITEM:
      return {
        ...state, cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
      }
    case cartActionType.MINUS_AN_ITEM:
      return{
        ...state, cartItems: minusItem(state.cartItems, action.payload)
      }
    default: return state;
  }
}
export default cartReducer;