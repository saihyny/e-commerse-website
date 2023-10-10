import Clasess from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = () => {
  return (
    <button className={Clasess.button}>
      <sapn className={Clasess.icon}>
        <CartIcon />
      </sapn>
      <sapn>Your cart</sapn>
      <sapn className={Clasess.badge}>3</sapn>
    </button>
  );
};
export default HeaderCartButton;
