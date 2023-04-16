import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidgetComponent";
import ListOptionNavBarComponent from "./ListOptionNavBarComponent";
import logo from "../../logo.png";

const NavBarComponent = (props) => {
  const categories = [
    "Electronics",
    "Jewelery",
    "Men's clothing",
    "Women's clothing",
  ];

  return (
    <Fragment>
      <div className="navbar">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>
        </div>
        <ListOptionNavBarComponent categories={categories} />
        <CartWidget />
      </div>
    </Fragment>
  );
};

export default NavBarComponent;
