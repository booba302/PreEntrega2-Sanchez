import React, { Fragment, useState } from "react"
import useFetch from "../utils/useFetch"
import ItemComponent from "../components/Item/ItemComponent"
const BASE_URL = "https://fakestoreapi.com/products"

const ProductsView = (props) => {
  const [data, load] = useFetch(BASE_URL)

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
            )
          })
        )}
      </div>
    </Fragment>
  )
}

export default ProductsView
