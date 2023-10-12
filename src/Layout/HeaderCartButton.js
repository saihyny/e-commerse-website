import Clasess from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";




const HeaderCartButton = (props) => {
  
  return (
    <button className={Clasess.button} onClick={props.sendPropFHC} >
      <sapn className={Clasess.icon}>
        <CartIcon />
      </sapn>
      <sapn>Your cart</sapn>
      <sapn className={Clasess.badge}>3</sapn>
    </button>
  );
};
export default HeaderCartButton;
