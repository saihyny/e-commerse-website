
import {Fragment} from 'react';
import Header from './Layout/Header';
import Meals from './MealsList/Meals';
import Cart from './Cart/Cart';

function App() {
  return (
    <Fragment>
      <Cart></Cart>
     <Header></Header>
     <main>
      <Meals/>
     </main>

     </Fragment>
  );
}

export default App;
