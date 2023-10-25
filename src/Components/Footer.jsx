import "./Footer.module.css";
import React, {useContext} from 'react'
import { ContextGlobal } from './utils/global.context'

const Footer = () => {
  const {tema} = useContext(ContextGlobal)

  return (
    <footer style={{background: tema.background, color:tema.font}}>
        <p>Powered by</p>
        <img src="./images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
