import logo from './logo.svg';
import './App.css';
import Homepage from './page/Homepage';
import Aboutpage from './page/Aboutpage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1> welcome to my app! </h1>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/about' element={<Aboutpage />} />
      </Routes>

    </div>
  );
}

export default App;
