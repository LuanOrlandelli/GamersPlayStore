import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    const itemExists = cartItems.find(
      (item) => item.id === product.id
    );

    if (itemExists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        )
      );

      return;
    }

    setCartItems([
      ...cartItems,
      {
        ...product,
        quantidade: 1,
      },
    ]);
  }

  function removeFromCart(id) {
    setCartItems(
      cartItems.filter((item) => item.id !== id)
    );
  }

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
  };

  console.log(cartItems);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}