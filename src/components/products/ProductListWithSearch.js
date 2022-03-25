import {useState} from 'react';
import ProductsList from './ProductsList';
import { products } from './../../assests/data/products';

const ProductsListWithSearch = () => {
  const [wordToSearch, setWordToSearch] = useState('');

  const inputHandler = (ev) => {
    setWordToSearch(ev.target.value);
  }

  const filterBySearch = (wordToSearch) => {
    console.log(wordToSearch,'sadas');
    wordToSearch = wordToSearch.toUpperCase()
    return products.filter(product => {
      let str = `${product.title} ${product.style} ${product.sku}`.toUpperCase();
      return str.indexOf(wordToSearch) >= 0;
    })
  };

  let filteredProducts = filterBySearch(wordToSearch);
  return(
    <div>
      <input onChange={ev => inputHandler(ev)} value={wordToSearch} type="text" placeholder="Search" />
      <ProductsList products={filteredProducts} />
    </div>
  )

}

export default ProductsListWithSearch;

// class ProductsListWithSearch extends React.PureComponent {
//   state = {
//     searchTerm: ''
//   }
//   handleSearch = event => {
//     this.setState({ searchTerm: event.target.value })
//   }
//   render() {
//     const { searchTerm } = this.state
//     let filteredProducts = filterProducts(searchTerm);
//     return (
//       <>
//         <input onChange={this.handleSearch} value={this.state.searchTerm} type="text" placeholder="Search" />
//         <ProductsList products={filteredProducts} />
//       </>
//     )
//   }
 

// const filterProducts = (searchTerm) => {
//   searchTerm = searchTerm.toUpperCase()
//   return products.filter(product => {
//     let str = `${product.title} ${product.style} ${product.sku}`.toUpperCase();
//     return str.indexOf(searchTerm) >= 0;
//   })
// }