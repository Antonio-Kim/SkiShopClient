import { Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/store/configureStore';
import CartTable from './CartTable';
import CartSummary from './CartSummary';

export default function BasketPage() {
  const { cart } = useAppSelector((state) => state.cart);

  if (!cart) return <Typography variant="h3">Your basket is empty</Typography>;

  return (
    <>
      <CartTable items={cart.items} />
      <Grid container>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          <CartSummary />
          <Button
            component={Link}
            to={'/checkout'}
            variant="contained"
            size="large"
            fullWidth
          >
            Checkout
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
