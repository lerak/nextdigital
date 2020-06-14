import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Svg from "./svg"
import "./header.css"
import Img from "./image"
import Logo from "../images/next-logo.png"
// import Menu from "./menu/MenuButton"
const Header = ({ siteTitle }) => (
  <header>
    <div className="menubar">
      <img className="logo" src={Logo} alt={ siteTitle } />
      {/* <Menu /> */}
      </div>
    <div className="header">
      <h1>su sitio web <span>debe ser</span> su mejor <span>vendedor</span></h1>
    </div>
    <div className="svg">
       <Svg />
    </div>
    <div className="yellowheader">
      <div className="headerImage">
         <Img />
      </div>
      <div className="headerContent">
         <p>Nos especializamos en marketing digital personalizado para empresas, con un enfoque en búsqueda local, Páginas web para PYMES, publicidad pagada y redes sociales.
No es solo un plan, es una sociedad que pone su negocio local en el mapa.</p>
<Link to="/#form"><button>Conecta</button></Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
