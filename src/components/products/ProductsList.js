import { ProductItem } from './ProductItem';

const ProductsList = ({products}) => {
  return (
    <div>
      <div>
        <div>
          <h2>Products</h2>
        </div>
      </div>
      <div>
        {products.map((product) => <ProductItem key={product.sku} product={product} />)}
      </div>
    </div>
  )
}

export default ProductsList;