import './App.css';
import Homepage from './page/Homepage';
import Aboutpage from './page/Aboutpage';
import ProductPage from './page/ProductPage'
import ProductDetailPage from './page/ProductPage'

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/about' element={<Aboutpage />} />
        <Route path='/products' element={<ProductPage />}/>
        <Route path='/products/:id' element={<ProductDetailPage />}/>
      </Routes>

    </div>
  );
}

export default App;
