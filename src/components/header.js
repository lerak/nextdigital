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
     <div>
        <h1>Hacemos <span>tu menú</span> digital</h1>
        <h3><span>Construya una mejor</span> presencia en línea para <span>su negocio local</span></h3>
      </div>
    </div>
    {/* <div className="svg">
       <Svg />
    </div> */}
    <div className="yellowheader">
      <div className="headerImage">
         <Img />
      </div>
      <div className="headerContent">
         <h2>Haz que tus comensales tengan
tu menú de forma digital</h2>
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
