import './App.css';
import productdata from './data';
import Home from './pages/Home';
// import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import Cart from './pages/Cart';
import Navigation from "./components/Navigation";
import Header from "./components/Header";

function App() {
    const [cartItems, setCartItems] = useState([]);

    
    const addItem = (item) => {
        const getData = productdata.filter((inp)=> inp.id === item );
        setCartItems([...cartItems, ...getData]);
    }

    const removeItem = (item) => {
      console.log("remove item", item);
      const fData = cartItems.filter((obj) => obj.id !== item);
      console.log(fData);
      setCartItems([...fData]);
    }

    
  return (
    <>
    <Navigation cartItems={cartItems} />
    <Header />
    <Cart cartItems={cartItems} removeItem={removeItem} />
    <Home productdata={productdata} addItem={addItem} cartItems={cartItems} />
    </>
  )
}



export default App;