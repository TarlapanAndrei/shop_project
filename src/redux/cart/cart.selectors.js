import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectToggleHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
)
export const selectItemCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accumlator, currentElement)=>accumlator+currentElement.quantity ,0)
)
export const selectTotalPrice = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((priceAccumulator, currenItem)=> priceAccumulator + currenItem.quantity*currenItem.price, 0)
)