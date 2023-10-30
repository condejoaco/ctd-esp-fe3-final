import React, {useContext, useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { ContextGlobal } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const  { id } = useParams();
  const { dentistas } = useContext(ContextGlobal);
  const [dentista, setDentista] = useState(null);
  const { tema } = useContext(ContextGlobal);

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const dentist = dentistas.find((dentista) => dentista.id === id);
  useEffect(() => {
    const fetchDentist = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await res.json();
        setDentista(data);
      } catch (error) {
        console.error('Error fetching dentist:', error);
      }
    };

    fetchDentist();
  }, [id]);

  if (!dentista) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ backgroundColor: tema.background, color: tema.font }}>
      <h1>Detail Dentist {dentista.name} {dentista.username}</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div>
      <h2>Nombre: {dentista.name} {dentista.username}</h2>
      <h2>Email: {dentista.email}</h2>
      <h2>Phone: {dentista.phone}</h2>
      <h2>Website: {dentista.website}</h2>
      </div>
    </div>
  )
}

export default Detail