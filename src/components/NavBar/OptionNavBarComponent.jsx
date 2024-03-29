import React from "react";
import { NavLink } from "react-router-dom";

const OptionNavBarComponent = (props) => {
  const { category } = props;
  return (
    <NavLink to={`/category/${category}`}>
      <span className="act-button">{category}</span>
    </NavLink>
  );
};

export default OptionNavBarComponent;
