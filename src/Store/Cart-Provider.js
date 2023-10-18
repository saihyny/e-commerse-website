import CartContext from "./Cart-Context";
import React, { useState } from "react";

const CartProvider = (props) => {
  const [ReItem, UeItem] = useState([]);
  const [itemD, itemU] = useState([{}]);
  const [oldamount , Newamount] = useState(0)
  
  const addingQuantity = (item)=>{
   for(let i=1; i<cartContext.itemDetails.length;i++)
   {
    
    let idIndex= 0;
   
    if(cartContext.itemDetails[i].id===item.id)
    {
      cartContext.items[idIndex]=(item.quantity).toString()
      cartContext.itemDetails[idIndex].quantity=(item.quantity).toString();
      
      Newamount((prev)=>{
        return prev=( Number(item.price)*Number(item.quantity))
    })
    }
    idIndex++;
   }
   
  }

  const AddItemFunction = (item) => {
    UeItem((prev) => {
      return [...prev, item.quantity];
    });
    itemU((prev) => {
      return [
        ...prev,
        {
          id: item.id,
          name: item.name,
          description: item.description,
          price: item.price,
          quantity:item.quantity,
        }
      ];
    });
    Newamount((prev)=>{
        return prev=prev +( Number(item.price)*Number(item.quantity))
    })

  };
  
  const RemoveItemFunction = (id) => {};
  const cartContext = {
    items: ReItem,
    itemDetails: itemD,
    totalAmount: oldamount.toFixed(2),
    addItem: AddItemFunction,
    removeItem: RemoveItemFunction,
    addingCount: addingQuantity,
 
};
console.log(cartContext.items)

return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
