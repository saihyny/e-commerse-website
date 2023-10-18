
import {useState} from 'react';
import Header from './Layout/Header';
import Meals from './MealsList/Meals';
import Cart from './Cart/Cart';
import CartProvider from './Store/Cart-Provider';

function App() {
  const [useSetCart,setCart]=useState(false)

  const handlingTrue = ()=>{
    setCart(true)
  }
  const handlingFalse = ()=>{
    setCart(false)
  }

  return (
    <CartProvider>
     {useSetCart && <Cart sendpropFC={handlingFalse}></Cart>}
     <Header sendPropFH={handlingTrue}></Header>
     <main>
      <Meals/>
     </main>

     </CartProvider>
  );
}

export default App;
