import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard';
import CoinPage from './Pages/CoinPage';
import Compare from './Pages/Compare';
import { useEffect } from 'react';

function App() {
  // var cursor1;
  // var cursor2;
  // var cursor3;

  // useEffect(() => {
  //   cursor1 = document.getElementById("cursor1");
  //   document.body.addEventListener("mousemove", function (e) {
  //     return (
  //       (cursor1.style.left = e.clientX + "px"),
  //       (cursor1.style.top = e.clientY + "px")
  //     );
  //   });

  //   cursor2 = document.getElementById("cursor2");
  //   document.body.addEventListener("mousemove", function (e) {
  //     return (
  //       (cursor2.style.left = e.clientX + "px"),
  //       (cursor2.style.top = e.clientY + "px")
  //     );
  //   });
  //   cursor3 = document.getElementById("cursor3");
  //   document.body.addEventListener("mousemove", function (e) {
  //     return (
  //       (cursor3.style.left = e.clientX + "px"),
  //       (cursor3.style.top = e.clientY + "px")
  //     );
  //   });
  // document.body.addEventListener("mousedown", function (e) {
  //   return (
  //     (cursor.style.height = "0.5rem"),
  //     (cursor.style.width = "0.5rem"),
  //     (cursorPointer.style.height = "2.5rem"),
  //     (cursorPointer.style.width = "2.5rem")
  //   );
  // });
  // document.body.addEventListener("mouseup", function (e) {
  //   return (
  //     (cursor.style.height = "0.3rem"),
  //     (cursor.style.width = "0.3rem"),
  //     (cursorPointer.style.height = "2rem"),
  //     (cursorPointer.style.width = "2rem")
  //   );
  // });
  // }, []);

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
      {/* <div className="cursor1" id="cursor1"></div>
      <div className="cursor2" id="cursor2"></div>
      <div className="cursor3" id="cursor3"></div> */}
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
