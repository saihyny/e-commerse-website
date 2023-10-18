import classes from "./MealItem.Form.module.css";
import Input from "./Input";
import React, {useState, useRef } from "react";


const MealItemForm = (props) => {
  const [amountIsValid,setAmountIsValid] = useState(true)
 
  const AmountRef = useRef();

  const SubmitHandlerFn = (e) => {
    e.preventDefault();
    const EnterdAmountNumber = AmountRef.current.value;
    const EnterdNumber = +EnterdAmountNumber;

    if (
      EnterdAmountNumber.trim().length === 0 ||
      EnterdNumber > 1 ||
      EnterdNumber > 5
    ) {
      setAmountIsValid(false)
      return;
    }

      props.onAddToCart(EnterdNumber) 
  };
  return (
    <form className={classes.form} onSubmit={SubmitHandlerFn}>
      <Input
        ref={AmountRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />

      <button>+Add</button>
     {!amountIsValid && <p>please chech your input</p>}
    </form>
  );
};
export default MealItemForm;
