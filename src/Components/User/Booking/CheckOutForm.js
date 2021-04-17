import React, { useContext } from "react";
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { userContext } from "../../../App";

const CheckoutForm = ({service}) => {
    let {
        loggedInUser,
        setLoggedInUser,
        isUserLoggedIn,
        setIsUserLoggedIn,newService,
        setNewService
      } = useContext(userContext);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {

    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      let booking={...loggedInUser, cardId:paymentMethod.id,cardInfo:paymentMethod.card,serviceName:service.name,servicePrice:service.price,serviceImage:service.imageURL,serviceDescription:service.description,status:'Pending'}
      fetch('http://localhost:5000/addBooking',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(booking),
      })
      .then(res=>res.json())
      .then((result)=>{
          if(result){
              alert('your booking is placed!!')
          }
      })
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button className='mt-4 btn-style px-5' type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;