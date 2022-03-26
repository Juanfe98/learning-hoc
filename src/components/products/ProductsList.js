import { ProductItem } from './ProductItem';

const ProductsList = ({data: products, wordToSearch = ''}) => {
  
  const filterBySearch = (wordToSearch) => {
    wordToSearch = wordToSearch.toUpperCase();
    return products.filter(product => {
      let str = `${product.title} ${product.style} ${product.sku}`.toUpperCase();
      return str.indexOf(wordToSearch) >= 0;
    })
  };

  let filteredProducts = filterBySearch(wordToSearch);

  return (
    <div>
      <div>
        <div>
          <h2>Products</h2>
        </div>
      </div>
      <div>
        {filteredProducts.map((product) => <ProductItem key={product.sku} product={product} />)}
      </div>
    </div>
  )
}

export default ProductsList;