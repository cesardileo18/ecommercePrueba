import './appNavbar.css'
import React, { useState } from 'react'
import NavLink from '../NavLink/NavLink'
import { slide as Menu } from 'react-burger-menu' // slide
import iconoInicio from '../../images/iconoInicio.png'
import iconoSucursales from '../../images/iconoSucursales.png'
import iconoInformacion from '../../images/iconoInformacion.png'
import iconoUbicacion from '../../images/iconoUbicacion.png'
import iconoFacebook from '../../images/iconoFacebook.png'
import iconoYoutube from '../../images/iconoYoutube.png'
import iconoInstagram from '../../images/iconoInstagram.png'
import iconoContacto from '../../images/iconoContacto.png'
import iconoWhatsapp from '../../images/iconoWhatsapp.png'

function AppNavbar () {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = (event) => {
    // event.target.offsetParent
    // event.target.offsetParent.ariaHidden
    if (event.target.offsetParent) {
      setSidebar(!sidebar)
    }
  }
  return (
    <>
      <Menu isOpen={sidebar}>
        <div className='contenedorPadreMenu'>
          <div className='contenedorIconos'>
            {/* Clase generica, con display flex, y align items  */}
            <div className='iconosMenu'>
              <img src={iconoInicio} className='iconoInicio' /><NavLink onClick={() => showSidebar()} id='inicio' className='menu-item' to='/Inicio'>Inicio</NavLink>
            </div>
            <div className='iconosMenu'>
              <img src={iconoSucursales} className='iconoSucursales' /><NavLink onClick={() => showSidebar()} id='sucursales' className='menu-item' to='/Sucursales'>Sucursales</NavLink>
            </div>
            <div className='iconosMenu'>
              <img src={iconoInformacion} className='iconoInformacion' /> <NavLink onClick={() => showSidebar()} id='informacion' className='menu-item' to='/Informacion'>Información</NavLink>
            </div>
            <div className='iconosMenu'>
              <img src={iconoUbicacion} className='iconoUbicacion' /><NavLink onClick={() => showSidebar()} id='ubicacion' className='menu-item' to='/Ubicacion'>Ubicación</NavLink>
            </div>
          </div>
          <footer>
            <h1>Redes Sociales</h1>
            <div className='iconosMenu'>
              <img src={iconoFacebook} className='mr-2.5' /> <img src={iconoYoutube} className='mr-2.5' /> <img src={iconoInstagram} className='mr-2.5' />
            </div>
            <hr />
            <h1 className='mt-4'>Contacto</h1>
            <div className='iconosMenu'>
              <img src={iconoContacto} className='mr-2.5' /> <img src={iconoWhatsapp} />
            </div>
          </footer>
        </div>
      </Menu>
    </>
  )
}

export default AppNavbar
