import { cartActionType } from './cart.types';

export const toggleHidden = ()=>({
  type: cartActionType.HIDDEN_TOGGLE
})

export const addItem = item =>({
  type: cartActionType.ADD_ITEM,
  payload: item
})