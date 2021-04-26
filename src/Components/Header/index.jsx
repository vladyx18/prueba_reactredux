import React from 'react'
import { Link } from 'react-router-dom'
import LogoBW2 from '../../Assets/Img/logo-platzi-video-BW2.png'
import UserIcon from '../../Assets/Img/user_icon.png'
import '../../Assets/Sass/Components/_Header.scss'

export const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__img" src={LogoBW2} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          <img src={UserIcon} alt="" />
          <p>Perfil</p>
        </div>
        <ul>
          <li>
            <Link to="/cuenta">Cuenta</Link>
          </li>
          <li>
            <Link to="/login">Iniciar Sesión</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
