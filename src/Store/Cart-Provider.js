import CartContext from "./Cart-Context";
import React, { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const UpdatedTotalAmount =
    state.totalAmount + action.item.price * action.item.amount;
   

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItemItem = state.items[existingCartItemIndex]
    let updatedItems;
     if(existingCartItemItem)
     {
      const updateditem = {
        ...existingCartItemItem,
        amount: existingCartItemItem.amount+action.item.amount
      } 
      updatedItems= [...state.items];
      updatedItems[existingCartItemIndex]=updateditem;
     }else {
        updatedItems = state.items.concat(action.item)
     }

   
    return {
      items: updatedItems,
      totalAmount: UpdatedTotalAmount,
    };
  }
  if(action.type==='REMOVE')
  {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingCartItemItem = state.items[existingCartItemIndex]
      const UpdatedTotalAmount =
      state.totalAmount - existingCartItemItem.price;
    let updatedItems;
    if(existingCartItemItem.amount===1)
    {
        updatedItems=state.items.filter((item)=>item.id !== action.id)
    } 
    else 
    {
        const updateditem = {...existingCartItemItem,amount:existingCartItemItem.amount-1};
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updateditem;
    }
    return {
      items:updatedItems,
      totalAmount:UpdatedTotalAmount
    };
  }
  return defaultCartState;
};


const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const AddItemFunction = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const RemoveItemFunction = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: AddItemFunction,
    removeItem: RemoveItemFunction,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
