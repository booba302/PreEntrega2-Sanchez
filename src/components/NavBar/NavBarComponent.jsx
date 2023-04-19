import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidgetComponent";
import ListOptionNavBarComponent from "./ListOptionNavBarComponent";
import useFetch from "../../utils/useFetch";
import logo from "../../logo.png";
const BASE_URL = "https://fakestoreapi.com/products/categories";

const NavBarComponent = (props) => {
  const [data] = useFetch(BASE_URL)

  return (
    <Fragment>
      <div className="navbar">
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>
        </div>
        <ListOptionNavBarComponent categories={data} />
        <CartWidget data={0} />
      </div>
    </Fragment>
  );
};

export default NavBarComponent;
