import React from 'react'
import { Link } from 'react-router-dom'
import GoogleIcon from '../Assets/Img/google-icon.png'
import TwitterIcon from '../Assets/Img/twitter-icon.png'
import '../Assets/Sass/Components/_Login.scss'

const Login = () => {
  return (
    <div>
      <section className="login">
        <section className="login__container">
          <h2>Inicia Sesión</h2>
          <form className="login__container--form">
            <input className="input" type="text" placeholder="Correo" />
            <input className="input" type="password" placeholder="Contraseña" />
            <button className="button">Iniciar Sesión</button>
            <div className="login__container--remember-me">
              <label>
                <input type="checkbox" id="cbox1" value="first_checkbox" />
                Recuerdame
              </label>
              <Link to="/frgpwd">Olvidé mi contraseña</Link>
            </div>
          </form>
          <section className="login__container--social-media">
            <div>
              <img src={GoogleIcon} alt="Google icon" />
              Inicia sesión con Google
            </div>
            <div>
              <img src={TwitterIcon} alt="Twitter icon" />
              Inicia sesión con Twitter
            </div>
          </section>
          <p className="login__container--register">
            No tienes ninguna cuenta <Link to="/register">Regístrate</Link>
          </p>
        </section>
      </section>
    </div>
  )
}

export default Login
