import React from "react";
import { NavLink } from "react-router-dom";

const ItemComponent = (props) => {
  const { data } = props;
  const { image, title, price, description, id } = data;

  const showShortValue = (value = "", lengthMax = 45) => {
    return value.length > lengthMax
      ? value.substring(0, lengthMax).concat("...")
      : value;
  };

  return (
    <div className="card shadow-sm m-4">
      <div className="card-header">
        <h5>{showShortValue(title, 35)}</h5>
        <NavLink to={`/products/` + id}>
          <button className="btn btn btn-outline-success btn-sm">+info</button>
        </NavLink>
      </div>
      <div className="card-body">
        <p>{showShortValue(description, 40)}</p>
        <img width={400} height={300} src={image} alt="" />
        <p>{price}$</p>
        <button className="btn btn-success">Agregar</button>
      </div>
    </div>
  );
};

export default ItemComponent;
