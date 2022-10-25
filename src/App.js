import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard';
import CoinPage from './Pages/CoinPage';
import Compare from './Pages/Compare';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/coin' element={<CoinPage />} />
          <Route path='/compare' element={<Compare />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
