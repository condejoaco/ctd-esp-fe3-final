import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const favoritasGuardadas = JSON.parse(localStorage.getItem('favoritas'));

  return (
    <div>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favoritasGuardadas && 
          favoritasGuardadas.map((favorita) =>
          <Card
            key={favorita.id}
            name={favorita.name}
            username={favorita.username}
            id={favorita.id}
          />

          
  )}

      </div>
    </div>
  );
};

export default Favs;
