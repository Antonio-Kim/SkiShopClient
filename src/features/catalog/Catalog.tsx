import { Button } from '@mui/material';
import { Product } from '../../app/models/product';
import ProductList from './ProductList';

type CatalogProps = {
  products: Product[];
  addProduct: () => void;
};

export default function Catalog({ products, addProduct }: CatalogProps) {
  return (
    <>
      <h1>Catalog</h1>

      <ProductList products={products} />
      <Button variant="contained" onClick={addProduct}>
        Add Product
      </Button>
    </>
  );
}
