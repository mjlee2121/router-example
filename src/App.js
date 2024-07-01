import './App.css';
import Homepage from './page/Homepage';
import AboutPage from './page/AboutPage';
import MoreAboutPage from './page/MoreAboutPage';
import ProductPage from './page/ProductPage';
import ProductDetailPage from './page/ProductDetailPage';
import LoginPage from './page/LoginPage';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import UserPage from './page/UserPage';

function App() {
  const [ authenticate, setAuthenticate ] = useState(false)

  const PrivateRoute = () => { // component as it's camel case
    return authenticate == true? <UserPage />: <Navigate to='/login'/>
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/products' element={<ProductPage />} />
        <Route path='/products/:id' element={<ProductDetailPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/about/:id' element={< MoreAboutPage/>} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/user' element={<PrivateRoute />} />
      </Routes>

    </div>
  );
}

export default App;
