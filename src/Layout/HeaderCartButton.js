import Clasess from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import CartContext from "../Store/Cart-Context";



const HeaderCartButton = (props) => {
  
  const CrtCtxt=useContext(CartContext)

  let NumberOfItems = 0;
   CrtCtxt.items.forEach(element => {
    NumberOfItems+=Number(element)
   });
 
  return (
    <button className={Clasess.button} onClick={props.sendPropFHC} >
      <sapn className={Clasess.icon}>
        <CartIcon />
      </sapn>
      <sapn>Your cart</sapn>
      <sapn className={Clasess.badge}>{NumberOfItems}</sapn>
    </button>
  );
};
export default HeaderCartButton;
