import { Fragment } from "react";
import mealsImage from "../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React meals</h1>
        <HeaderCartButton sendPropFHC={props.sendPropFH}></HeaderCartButton>
        
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="delicias food" />
        
      </div>
     
    </Fragment>
  );
};
export default Header;
