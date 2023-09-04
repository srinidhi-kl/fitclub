import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Header = () => {

  const mobile = window.innerWidth<=768 ? true: false;
  const [menuOpened, setMenuOpened]= useState(false)
  return (
    <div className="header" id='Home'>
        <img className='logo' src={Logo} alt="" />
        {(menuOpened===false && mobile===true)?(
          <div style={{backgroundColor: 'var(--appColor)', 
                      padding: '0.5rem', 
                      borderRadius: '5px'
                      }}
                      onClick={()=> setMenuOpened(true)}
                      >
          <img src={Bars} alt="" style={{width: '1.5rem', height: '1.5rem'}} />
          </div>
        ):
        <ul className='header-menu'>
            <li> <AnchorLink href='#Home'  onClick={()=> setMenuOpened(false)}>Home</AnchorLink></li>
            <li> <AnchorLink href="#programs" onClick={()=> setMenuOpened(false)}>Programs</AnchorLink> </li>
            <li> <AnchorLink href='#reasons' onClick={()=> setMenuOpened(false)}>Why us</AnchorLink></li>
            <li> <AnchorLink href='#plans' onClick={()=> setMenuOpened(false)}>Plans</AnchorLink></li>
            <li> <AnchorLink href='#test' onClick={()=> setMenuOpened(false)}>Testimonials</AnchorLink></li>
        </ul>
        }

        
    </div>
  )
}

export default Header