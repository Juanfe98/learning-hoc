import { products } from '../../../assests/data/products';
import { withSearch } from '../hoc/withSearch';
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

// Como necesitamos la data aca para pasarcela a withSearch, es posible que en un ambito real no la tengamos en este punto.
// En ese caso en el componente padre que seguramente si la tengamos podemos crear el componente de la misma forma, es decir:
// const StudentListSearchHOC = withSearch(ProductsList, data);
export default withSearch(ProductsList, products);