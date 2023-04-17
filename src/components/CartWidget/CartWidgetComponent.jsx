import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function CartWidget(props) {
  const { data } = props;

  return (
    <div className="cart">
      <FontAwesomeIcon icon={faCartShopping} />
      {data}
    </div>
  );
}

export default CartWidget;
