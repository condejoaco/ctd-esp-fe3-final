import React, {useContext} from 'react';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contacto from "./Routes/Contact";
import Destacados from "./Routes/Favs";
import ContextProvider, {ContextGlobal} from './Components/utils/global.context';

function App(){  
  if (localStorage.length > 0) {
    localStorage.clear();
  }
  return (
      <div className="App">
        <ContextProvider>
          <Navbar/>
          <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/dentist/:id' element={<Detail/>}/>
          <Route path='/contacto' element={<Contacto/>} />
          <Route path='/destacados' element={<Destacados/>} />
        </Routes>
          <Footer/>
        </ContextProvider>
      </div>
  );
}

export default App;
