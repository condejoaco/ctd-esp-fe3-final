import React from "react";
import {Link} from "react-router-dom"


const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    const favoritasGuardadas = JSON.parse(localStorage.getItem('favoritas')) || [];

    // Crear un objeto representando la tarjeta favorita
    const tarjetaFavorita = { name, username, id };

    // Verificar si la tarjeta favorita ya está en la lista
    const tarjetaExistente = favoritasGuardadas.find((favorita) => favorita.id === tarjetaFavorita.id);

    if (!tarjetaExistente) {
      // Si no existe, agregarla a la lista de favoritas
      const nuevasFavoritas = [...favoritasGuardadas, tarjetaFavorita];
      
      // Guardar la lista actualizada en el localStorage
      localStorage.setItem('favoritas', JSON.stringify(nuevasFavoritas));
    };
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src="/images/doctor.jpg" alt="perfil" className="icon" />
        <div className="CardBody">
        <h3 className="title">{name} {username}</h3>
        <Link to={`/dentist/${id}`}>Informacion</Link>
        </div>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add Fav</button>
    </div>
  );
};

export default Card;
