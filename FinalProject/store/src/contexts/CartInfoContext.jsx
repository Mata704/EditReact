import React, { createContext, useState } from "react";


const initialContext = {
  cartCount: 0,
  updateCart: () => {}
};

export const CartInfoContext = createContext(initialContext);



export const CartProvider = ({ children }) => {
  // Variaveis de estados
  const [cart, setCart] = useState(0);

  // Funções de Modificaçã do estado
  const updateCart = (cart) => {
    setCart(cart.length);
  };

  return (
    <CartInfoContext.Provider
      value={{
        cartCount: cart, // Passo o estado
        updateCart: updateCart // Passo o metodo para atulizar o estado
      }}
    >
      {children}
    </CartInfoContext.Provider>
  );
};