import React from 'react'
import '../../Assets/Sass/Components/_Searchbar.scss'

export const Searchbar = () => {
  return (
    <section className="main">
      <h2 className="main__title">Qué quieres ver hoy?</h2>
      <input type="text" className="input" placeholder="Buscar..." />
    </section>
  )
}
