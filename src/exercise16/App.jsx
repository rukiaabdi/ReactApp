import { useState } from 'react';
import CartContext from './exercise16/CartContext';
import ProductItem from './exercise16/ProductItem';
import CartSummary from './exercise16/CartSummary';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems(
      cartItems.filter(item => item.id !== itemId)
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart }}
    >
      <ProductItem
        id={1}
        name="Widget"
        price={19.99}
      />

      <ProductItem
        id={2}
        name="Gadget"
        price={29.99}
      />

      <CartSummary />
    </CartContext.Provider>
  );
}

export default App;