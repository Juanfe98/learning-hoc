import './App.css';
import ProductsListWithSearch from './components/products/ProductListWithSearch';
import StudentListWithSearch from './components/students/StudentListWithSearch';

function App() {
  return (
    <div className="App" style={{margin: 'auto'}}>
      <h1>High Order Components</h1>
      <hr style={{width: '100%'}} />
      <div style={{ display: 'flex', flexDirection: 'row', gap: '5rem', justifyContent: 'center'}}>
        <ProductsListWithSearch />
        <StudentListWithSearch />
      </div>
      {/* <ProductsList products={products} /> */}
    </div>
  );
}

export default App;
