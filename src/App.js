import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Adduser from './components/Adduser';
import Searchuser from './components/Searchuser';
import Deleteuser from './components/Deleteuser';
import Viewusers from './components/Viewusers';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Adduser/>} />
      <Route path='/Search' element={<Searchuser/>} />
      <Route path='/Delete' element={<Deleteuser/>} />
      <Route path='/View' element={<Viewusers/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
