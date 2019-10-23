import { cartActionType } from './cart.types';

export const toggleHidden = ()=>({
  type: cartActionType.HIDDEN_TOGGLE
})