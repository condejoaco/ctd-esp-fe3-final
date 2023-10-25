import "./Footer.module.css";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footerWrapper">
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-lg-6">
                {/* //Na linha seguinte deverá ser feito um teste se a aplicação
                // está em dark mode e deverá utilizar o css correto */}
                <img className="dhLogo" src="/images/DH.png" alt='DH-logo' />
              </div>
              <div className="icons">
                <img src="/images/ico-facebook.png" alt="ícone do facebook" className="icon" />
                <img src="/images/ico-instagram.png" alt="ícone do instagram" className="icon" />
                <img src="/images/ico-whatsapp.png" alt="ícone do whatsapp" className="icon" />
                <img src="/images/ico-tiktok.png" alt="ícone do tiktok" className="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer >
  )
}

export default Footer
