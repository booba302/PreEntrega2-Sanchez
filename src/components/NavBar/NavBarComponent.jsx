import React, { Fragment } from "react"
import logo from "../../logo.png"
import CartWidget from "../CartWidget/CartWidgetComponent"
import ListOptionNavBarComponent from "./ListOptionNavBarComponent"

const NavBarComponent = (props) => {
  const categories = [
    "Electronics",
    "Jewelery",
    "Men's clothing",
    "Women's clothing",
  ]

  return (
    <Fragment>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ListOptionNavBarComponent categories={categories} />
        <CartWidget />
      </div>
    </Fragment>
  )
}

export default NavBarComponent;
