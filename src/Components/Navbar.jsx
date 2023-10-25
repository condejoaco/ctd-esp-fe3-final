import React, {useContext} from 'react'
import {NavLink, Link} from 'react-router-dom';
import './Navbar.module.css'
import { ContextGlobal } from './utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {tema, cambiarTema} = useContext(ContextGlobal)
  return (
    <div style={{background: tema.background, color:tema.font}}>
    <nav className="navbar">
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <NavLink>
        <nav>
          <ul className="navbar-nav">
            <li className="navBarLink"><Link to={"/home"}>Home</Link></li>
            <li className="navBarLink"><Link to={"/contacto"}>Contacto</Link></li>
            <li className="navBarLink"><Link to={"/destacados"}>Destacados</Link></li>
          </ul>
          <button className="btnStyle" onClick={cambiarTema}> Change theme ☀ 🌙 </button>
        </nav>
      </NavLink>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
    </nav>
    </div>
  )
}

export default Navbar