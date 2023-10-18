import Clasess from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import CartContext from "../Store/Cart-Context";



const HeaderCartButton = (props) => {
  
  const CrtCtxt = useContext(CartContext)

  const NumberOfCardItems = CrtCtxt.items.reduce((currentNumber, item)=>{
    return currentNumber + item.amount;
  },0)

  return (
    <button className={Clasess.button} onClick={props.sendPropFHC} >
      <sapn className={Clasess.icon}>
        <CartIcon />
      </sapn>
      <sapn>Your cart</sapn>
      <sapn className={Clasess.badge}>{NumberOfCardItems}</sapn>
    </button>
  );
};
export default HeaderCartButton;
