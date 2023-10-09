import React from "react";
import mealsImage from "../assets/meals.jpg";
import classes from './Header.module.css'
const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React meals</h1>
        <button>cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="delicias food" />
      </div>
    </React.Fragment>
  );
};
export default Header;
