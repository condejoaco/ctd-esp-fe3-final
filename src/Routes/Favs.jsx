import React, {useContext} from "react";
import Card from "../Components/Card";
import { ContextGlobal} from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const favoritasGuardadas = JSON.parse(localStorage.getItem('favoritas')) || [];
  const { tema } = useContext(ContextGlobal);

  return (
    <div style={{background: tema.background, color:tema.font}}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favoritasGuardadas.map((favorita) =>
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
