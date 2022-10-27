import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard';
import CoinPage from './Pages/CoinPage';
import Compare from './Pages/Compare';
import { useEffect } from 'react';

function App() {

  const setInitialTheme = `
  function getUserPreference() {
    if(window.localStorage.getItem('theme')) {
      return window.localStorage.getItem('theme')
    }
    return window.matchMedia('(prefers-color-scheme: light)').matches 
      ? 'light' 
      : 'dark'
  }
  document.body.dataset.theme = getUserPreference();
  `;
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/coin' element={<CoinPage />} />
          <Route path='/compare' element={<Compare />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// https://6359fcdf812f6a2f258756f5--symphonious-basbousa-640fc5.netlify.app/
