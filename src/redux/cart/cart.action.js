import { cartActionType } from './cart.types';

export const toggleHidden = ()=>({
  type: cartActionType.HIDDEN_TOGGLE
})

export const addItem = item =>({
  type: cartActionType.ADD_ITEM,
  payload: item
})
export const removeItem = item =>({
  type: cartActionType.REMOVE_ITEM,
  payload: item
})
export const minusAnItem = item =>({
  type:cartActionType.MINUS_AN_ITEM,
  payload: item
})