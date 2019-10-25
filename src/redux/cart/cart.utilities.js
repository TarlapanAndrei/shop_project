export const addItemToCart = (cartItems, itemToAdd) =>{
  const ifExist = cartItems.find(item => item.id === itemToAdd.id)

  if(ifExist){
    return cartItems.map(item=> 
      item.id === itemToAdd.id ?
      {...item, quantity: item.quantity + 1}
      :
      item
      )
  }
  else{
    return [...cartItems, {...itemToAdd, quantity:1}]
  }
}

export const minusItem = (cartItems, itemToMinus)=>{
  if(itemToMinus.quantity <= 1){
    return cartItems.filter(item => item.id !== itemToMinus.id)
  } else {
    return cartItems.map(item => 
      item.id === itemToMinus.id ?
      {...item, quantity: item.quantity-1}
      :
      item
    )
  }
}