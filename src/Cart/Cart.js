import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../Store/Cart-Context";
import CartItem from "./CartItem";


const Cart = (props) => {
   const cartctx = useContext(CartContext)
   const totalAmount= `$${cartctx.totalAmount.toFixed(2)}`;
   const hasItems =  cartctx.items.length>0;

   const CartItemRemoveHandler = (id)=>{
    cartctx.removeItem(id)
   }
   const CartItemAddindHandler = (item)=>{
    cartctx.addItem({...item,amount:1})
   }
   const cartItems = (
    <ul className={classes['cart-items']}>
       {
         cartctx.items.map((item)=> 
         (
          <CartItem key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={CartItemRemoveHandler.bind(null,item.id)}
          onAdd={CartItemAddindHandler.bind(null,item)}
          ></CartItem>

        )
        )
       }
    </ul>
   )
 
  return (
    <Modal sendpropFmodal={props.sendpropFC}>
     
     {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.sendpropFC}>
          Close
        </button>
       {hasItems && < button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
