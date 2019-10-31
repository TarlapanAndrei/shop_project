import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StrypeCheckoutButton = ({ price }) =>{
  const priceForStripe = price * 100;
  const publichableKey ='pk_test_15pMQAbasEkWV4KOqyXDKofL000v0fyRkZ';
  const onToken = token =>{
    console.log(token)
    alert('Payment Successful')
  }
  return(
    <StripeCheckout
      label='Pay Now'
      name='Shop-origin LTD'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Yor total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publichableKey}
    />
  )
}
export default StrypeCheckoutButton;