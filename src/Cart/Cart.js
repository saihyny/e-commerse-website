import Modal from "../UI/Modal";
import classes from "./Cart.module.css";


const Cart = (props) => {

   
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "sushi", amount: 2, price: 23.12 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    
    <Modal sendpropFmodal={props.sendpropFC}>
  {cartItems}
  <div className={classes.total}>
    <span>Total Amount</span>
    <span>35.09</span>
  </div>
  <div className={classes.actions}>
    <button className={classes["button--alt"]}
    onClick={props.sendpropFC}
    >Close</button>
    <button className={classes.button}>Order</button>
  </div>
</Modal>
  );
};
export default Cart;