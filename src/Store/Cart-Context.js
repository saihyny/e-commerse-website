import React from "react";

const CartContext = React.createContext({
    itemDetails:[],
    totalAmount:0,
    addItem: (item) => {},
    removeItem: (id) => {},
    addingCount:(item)=>{},
});

export default CartContext