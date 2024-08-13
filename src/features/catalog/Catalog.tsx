import { Product } from '../../app/models/product';

type CatalogProps = {
  products: Product[];
  addProduct: () => void;
};

export default function Catalog({ products, addProduct }: CatalogProps) {
  return (
    <>
      <h1>Catalog</h1>;
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </>
  );
}
