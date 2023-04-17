import React, { Fragment } from "react";
import useFetch from "../utils/useFetch";
import ItemComponent from "../components/Item/ItemComponent";
import { useParams } from "react-router-dom";
const BASE_URL = "https://fakestoreapi.com/products/category/";

const CategoryView = (props) => {
  const { category } = useParams();
  const [data, load] = useFetch(`${BASE_URL}${category}`);

  return (
    <Fragment>
      <div className="products justify-content-center">
        {load ? (
          <h1>Se están cargando los productos</h1>
        ) : (
          data.map((product, index) => {
            return (
              <div key={index}>
                <ItemComponent data={product} />
              </div>
            );
          })
        )}
      </div>
    </Fragment>
  );
};

export default CategoryView;
