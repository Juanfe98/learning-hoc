import './App.css';
// import ProductsListWithSearch from './components/products/ProductListWithSearch';
// import StudentListWithSearch from './components/students/StudentListWithSearch';
import { products } from './assests/data/products';
import { students } from './assests/data/students';
import ProductsList from './components/products/ProductsList';
import StudentsList from './components/students/StudentList';
import { ListSearcher } from './components/HOC/ListSearcher';

function App() {

  const ProductsListWithSearchHOC = ListSearcher(ProductsList, products);
  const StudentListWithSearchHOC = ListSearcher(StudentsList, students);

  return (
    <div className="App" style={{margin: 'auto'}}>
      <h1>High Order Components</h1>
      <hr style={{width: '100%'}} />
      <div style={{ display: 'flex', flexDirection: 'row', gap: '5rem', justifyContent: 'center'}}>
        {/* <ProductsListWithSearch /> */}
        <ProductsListWithSearchHOC />
        <StudentListWithSearchHOC />
        {/* <StudentListWithSearch /> */}
      </div>
      {/* <ProductsList products={products} /> */}
    </div>
  );
}

export default App;
