import classes from "./MealItem.Form.module.css";
import Input from "./Input";
import React,{useContext,useState} from "react";
import CartContext from "../Store/Cart-Context";

const MealItemForm = (props) => {
 
  const [oldcount , newcount] = useState(0)
  const CrtCtx = useContext(CartContext)

  
  const addFunction = (e)=>{
    e.preventDefault()
    let count = oldcount;
    newcount(count=count+1)
    if(count===1)
    {
      const quantity = document.getElementById( "amount" +props.id).value
  
      CrtCtx.addItem({...props.item, quantity:quantity })
    }
    else if(count>1)
    {
         CrtCtx.addingCount({...props.item,quantity:count})
         
    }
  
       
    }
    
   
  
 
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount" +props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />

      <button onClick={addFunction} >+Add</button>
    </form>
  );
};
export default MealItemForm;
