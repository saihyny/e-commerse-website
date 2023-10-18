import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../Store/Cart-Context";


const Cart = (props) => {
  
  const cartctx = useContext(CartContext);
  


  const cartItemsorginal = cartctx.itemDetails.map((item) => (
   
    <ul key={item.id} className={classes["cart-items"]}>
      <li>
        {item.name && <div>Name: {item.name}</div>}
        {item.description && <div>Description: {item.description}</div>}
        {item.price && <div>Price: {item.price}</div>}
        {item.quantity && <div>Quantity: {item.quantity}</div>}
      </li>
    </ul>
    
  ));

   
 
  return (
    <Modal sendpropFmodal={props.sendpropFC}>
      {cartItemsorginal}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartctx.totalAmount }</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.sendpropFC}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
