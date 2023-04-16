import React, { Fragment } from "react";
import useFetch from "../utils/useFetch";
import { useParams } from "react-router-dom";
const BASE_URL = "https://fakestoreapi.com/products/";

const DetailsView = (props) => {
  const { id } = useParams();
  const [data] = useFetch(`${BASE_URL}+${id}`);
  const {title, description, image, price} = data;

  return (
    <Fragment>
        <div className="container">
            <div className="row justify-content-center">
            <div className="card shadow-sm m-5 col-7">
        <div className="card-header">
          <h5>{title}</h5>
        </div>
        <div className="card-body">
          <p>{description}</p>
            <img width={400} height={300} src={image} alt="" />
          <p>{price}$</p>
          <button className="btn btn-success">Comprar</button>
        </div>
      </div>
            </div>
        </div>
      
    </Fragment>
  );
};

export default DetailsView;
