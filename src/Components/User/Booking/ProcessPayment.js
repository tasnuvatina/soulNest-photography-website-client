import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import {CardElement} from '@stripe/react-stripe-js';
import CheckoutForm from "./CheckOutForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51IeL40Kug8MYQ4T2I6ioJp2V24nZXpWpI942xgTYxI2yhGlaA5js7atq3oQdJEkK00zwiFFmNBsnlNMm7tDLZXEE001XLguIlg"
);

const ProcessPayment = ({service}) => {
  return (
    <div  className="my-3">
      <Elements stripe={stripePromise}>
        <CheckoutForm service={service}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default ProcessPayment;
