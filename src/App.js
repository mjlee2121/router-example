import './App.css';
import Homepage from './page/Homepage';
import AboutPage from './page/AboutPage';
import MoreAboutPage from './page/MoreAboutPage';
import ProductPage from './page/ProductPage';
import ProductDetailPage from './page/ProductDetailPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/products' element={<ProductPage />} />
        <Route path='/products/:id' element={<ProductDetailPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/about/:id' element={< MoreAboutPage/>} />
      </Routes>

    </div>
  );
}

export default App;
