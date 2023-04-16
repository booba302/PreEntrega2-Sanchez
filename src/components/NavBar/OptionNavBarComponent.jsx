import React from "react"
import { NavLink } from "react-router-dom"

const OptionNavBarComponent = (props) => {
  const { category } = props
  return (
    <NavLink to={category.toLowerCase()}>
      <span className="act-button">{category}</span>
    </NavLink>
  )
}

export default OptionNavBarComponent
