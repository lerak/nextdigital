import React,  { useState} from 'react'
import './menu.css'
import MenuContent from './MenuContent'
import MenuIcon from '../../images/menu@2x.png'


const MenuButton = () => {
  const [menu, openMenu] = useState(false)
    return <>
       <img className="menuButton" src={MenuIcon} onClick={() => openMenu(!menu)}/>
     
      {menu === true && <MenuContent /> }
    </>
}

export default MenuButton