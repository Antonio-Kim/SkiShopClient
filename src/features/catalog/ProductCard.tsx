import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material';
import { Product } from '../../app/models/product';
import { Link } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';
import { currencyFormat } from '../../app/utils/utils';
import { addCartItemAsync } from '../cart/CartSlice';
import { useAppDispatch, useAppSelector } from '../../app/store/configureStore';

type ProductCardProp = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProp) {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.cart);

  return (
    <>
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'secondary.main' }}>
              {product.name.charAt(0).toUpperCase()}
            </Avatar>
          }
          title={product.name}
          titleTypographyProps={{
            sx: {
              fontWeight: 'bold',
              color: 'primary.main',
            },
          }}
        />
        <CardMedia
          sx={{
            height: 140,
            backgroundSize: 'contain',
            bgcolor: 'primary.light',
          }}
          image={product.pictureUrl}
          title={product.name}
        />
        <CardContent>
          <Typography gutterBottom color="secondary" variant="h5">
            {currencyFormat(product.price)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.brand} / {product.type}
          </Typography>
        </CardContent>
        <CardActions>
          <LoadingButton
            loading={status === 'pendingAddItem' + product.id}
            onClick={() =>
              dispatch(addCartItemAsync({ productId: product.id }))
            }
            size="small"
          >
            Add to cart
          </LoadingButton>
          <Button component={Link} to={`/catalog/${product.id}`} size="small">
            View
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
