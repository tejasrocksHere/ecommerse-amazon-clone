import React from "react";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
// import { useHistory } from "react-router-dom";

function Subtotal() {
//   const history = useHistory();
const [{ basket }, dispatch] = useStateValue();

  const subtotal = basket.reduce(
    (accumulator, item) => accumulator + item.price,
    0
  );

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items): <strong>${subtotal.toFixed(2)}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>

      <button >Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
