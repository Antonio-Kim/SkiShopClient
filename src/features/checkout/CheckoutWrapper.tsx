import { Elements } from '@stripe/react-stripe-js';
import CheckoutPage from './CheckoutPage';
import { loadStripe } from '@stripe/stripe-js';
import { useAppDispatch } from '../../app/store/configureStore';
import { useEffect, useState } from 'react';
import agent from '../../app/api/agent';
import { setCart } from '../cart/CartSlice';
import LoadingComponent from '../../app/ui/LoadingComponent';

const stripePromise = loadStripe(
  'pk_test_51PsYK2A9SRzAcUxeA1M8NSMkWIjUjO2sE1kSzSQi3PcVGhncenu9AN33tNV0U1IJjOWlMCW1OQFrTWiuUAgQuBM0002Qnz3wLL'
);

export default function CheckoutWrapper() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    agent.Payments.createPaymentIntent()
      .then((cart) => dispatch(setCart(cart)))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [dispatch]);

  if (loading) return <LoadingComponent message="Loading checkout..." />;

  return (
    <Elements stripe={stripePromise}>
      <CheckoutPage />
    </Elements>
  );
}
