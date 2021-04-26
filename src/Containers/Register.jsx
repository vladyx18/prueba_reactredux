import React from 'react'
import { Link } from 'react-router-dom'
import '../Assets/Sass/Components/_Register.scss'

const Register = () => {
  return (
    <div>
      <section className="register">
        <section className="register__container">
          <h2 className="register__title">Regístrate</h2>
          <form className="register__container--form">
            <input className="input" type="text" placeholder="Nombre" />
            <input className="input" type="text" placeholder="Correo" />
            <input className="input" type="password" placeholder="Contraseña" />
            <button className="button">Registrarme</button>
          </form>
          <Link to="/login">Iniciar sesión</Link>
        </section>
      </section>
    </div>
  )
}

export default Register
