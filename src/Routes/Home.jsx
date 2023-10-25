import React, {useContext} from 'react'
import Card from '../Components/Card'
import { ContextGlobal, ContextProvider  } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { dentistas } = useContext(ContextGlobal) 
  const { tema } = useContext(ContextGlobal);

  return (
    <main className="" style={{ backgroundColor: tema.background, color: tema.font }}> 
      <h1>Home</h1>
      <div className='card-grid' >
        {/* Aqui deberias renderizar las cards */}
          {dentistas.map(dentista => (
            <Card 
            key={dentista.id}
            name={dentista.name}
            username={dentista.username}
            email={dentista.email}
            phone={dentista.phone}
            website={dentista.website}
            id={dentista.id}
            />))
          }
      </div>
    </main>
  )
}

export default Home