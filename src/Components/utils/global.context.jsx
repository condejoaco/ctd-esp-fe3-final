import React from 'react';
import { createContext } from "react";
import {useState, useEffect} from "react"

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext();
export const themes = {
  light: {
    font: 'black',
    background: 'white'
    },
    dark: {
    font: 'white',
    background: 'black'
    }
  }

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [dentistas, setDentistas] = useState([])

  const [tema, setTema] = useState(themes.light)
  
  const getDentistas = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    setDentistas(data)
  }

  useEffect(()=>{
    getDentistas()
  }, [])

  const cambiarTema = () =>{
    if (tema === themes.dark) setTema(themes.light)
    if (tema === themes.light) setTema(themes.dark)
  }


  //Conviene guardar la API en una variable que despues use
  return (
    <ContextGlobal.Provider value={{dentistas, tema, cambiarTema}}>
      {children}
    </ContextGlobal.Provider>
  );
};


export default ContextProvider
