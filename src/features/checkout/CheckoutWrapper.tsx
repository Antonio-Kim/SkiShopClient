import { Elements } from '@stripe/react-stripe-js';
import CheckoutPage from './CheckoutPage';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51PsYK2A9SRzAcUxeA1M8NSMkWIjUjO2sE1kSzSQi3PcVGhncenu9AN33tNV0U1IJjOWlMCW1OQFrTWiuUAgQuBM0002Qnz3wLL'
);

export default function CheckoutWrapper() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutPage />
    </Elements>
  );
}
