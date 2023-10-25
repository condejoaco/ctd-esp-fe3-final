import React, {useContext} from 'react';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contacto from "./Routes/Contact";
import Destacados from "./Routes/Favs";
import ContextProvider from './Components/utils/global.context';
import { ContextGlobal } from './Components/utils/global.context'

function App(){
  /*const {tema} = useContext(ContextGlobal);*/

  return (
      <div className="App" /*style={{background: tema.background, color:tema.font}}*/>
        <ContextProvider>
          <Navbar/>
          <Routes>
          <Route path='/home' element={<Home/>}/>
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