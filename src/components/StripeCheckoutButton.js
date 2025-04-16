import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

// Load Stripe with your publishable key (replace with your own in real project)
const stripePromise = loadStripe('pk_test_your_publishable_key');

const StripeCheckoutButton = ({ eventId, ticketType }) => {
  const handleCheckout = async () => {
    try {
      const stripe = await stripePromise;

      // Call backend to create Stripe Checkout session
      const response = await axios.post('/api/payments/create-checkout-session', {
        eventId,
        ticketType
      });

      const sessionId = response.data.sessionId;

      // Redirect to Stripe Checkout
      const result = await stripe.redirectToCheckout({
        sessionId: sessionId
      });

      if (result.error) {
        console.error('Stripe error:', result.error.message);
      }
    } catch (error) {
      console.error('Checkout failed:', error);
    }
  };

  return (
    <button onClick={handleCheckout}>
      Pay with Stripe
    </button>
  );
};

export default StripeCheckoutButton;
