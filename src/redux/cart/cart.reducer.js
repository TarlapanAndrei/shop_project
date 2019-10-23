import { cartActionType } from './cart.types';

const INITIAL_STATE = {
  hidden: true
}
const cartReducer = (state=INITIAL_STATE, action)=>{
  switch(action.type){
    case cartActionType.HIDDEN_TOGGLE:
      return {
        ...state, hidden: !state.hidden
      }
    default: return state;
  }
}
export default cartReducer;