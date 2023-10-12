
import {Fragment,useState} from 'react';
import Header from './Layout/Header';
import Meals from './MealsList/Meals';
import Cart from './Cart/Cart';

function App() {
  const [useSetCart,setCart]=useState(false)

  const handlingTrue = ()=>{
    setCart(true)
  }
  const handlingFalse = ()=>{
    setCart(false)
  }

  return (
    <Fragment>
     {useSetCart && <Cart sendpropFC={handlingFalse}></Cart>}
     <Header sendPropFH={handlingTrue}></Header>
     <main>
      <Meals/>
     </main>

     </Fragment>
  );
}

export default App;
