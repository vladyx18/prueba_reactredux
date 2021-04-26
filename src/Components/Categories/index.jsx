import React from 'react'
import '../../Assets/Sass/Components/_Categories.scss'

export const Categories = ({ children, title }) => {
  return (
    <div className="categories">
      <h3 className="categories__title">{title}</h3>
      {children}
    </div>
  )
}
