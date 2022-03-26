import './App.css';
import ProductsList from './components/Exercise1/products/ProductsList';
import StudentList from './components/Exercise1/students/StudentList';

// import ProductsListWithSearch from './components/products/ProductListWithSearch';
// import StudentListWithSearch from './components/students/StudentListWithSearch';

function App() {

  return (
    <div className="App" style={{margin: 'auto'}}>
      <h1>High Order Components</h1>
      <hr style={{width: '100%'}} />
      <div style={{ display: 'flex', flexDirection: 'row', gap: '5rem', justifyContent: 'center'}}>

        {/* Separated and repetitive logic without using HOC */}
        {/* <ProductsListWithSearch /> */}
        {/* <StudentListWithSearch /> */}

        {/* Exercise 1 */}
        <StudentList />
        <ProductsList />
      </div>
      {/* <ProductsList products={products} /> */}
    </div>
  );
}

export default App;
