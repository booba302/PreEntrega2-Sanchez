import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function CartWidget(props) {
  return (
    <div className="cart">
      <FontAwesomeIcon icon={faCartShopping} />0
    </div>
  );
}

export default CartWidget;
