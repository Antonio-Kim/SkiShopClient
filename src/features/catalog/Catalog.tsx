import { useAppDispatch, useAppSelector } from '../../app/store/configureStore';
import LoadingComponent from '../../app/ui/LoadingComponent';
import { fetchProductsAsync, productSelector } from './catalogSlice';
import ProductList from './ProductList';
import { useEffect } from 'react';

export default function Catalog() {
  const products = useAppSelector(productSelector.selectAll);
  const { productsLoaded, status } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!productsLoaded) dispatch(fetchProductsAsync());
  }, [productsLoaded, dispatch]);

  if (status.includes('pending'))
    return <LoadingComponent message="Loading products..." />;
  return (
    <>
      <ProductList products={products} />
    </>
  );
}
