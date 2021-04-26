import React from 'react'
import '../../Assets/Sass/Components/_Carousel.scss'

export const Carousel = ({ children }) => {
  return (
    <section className="carousel">
      <div className="carousel__container">{children}</div>
    </section>
  )
}
