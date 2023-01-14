import React, { createContext, useState } from "react";


const initialContext = {
  cartCount: 0,
  updateCart: () => {}
};

export const CartContext = createContext(initialContext);



export const CartProvider = ({ children }) => {
  // Variaveis de estados
  const [cart, setCart] = useState([]);

  // Funções de Modificaçã do estado
  const updateCart = (value) => {
    let aux = [...cart]
    aux.push(value)
    setCart(aux);
  };

  return (
    <CartContext.Provider
      value={{
        cartCount: cart.length, // Passo o estado
        updateCart: updateCart // Passo o metodo para atulizar o estado
      }}
    >
      {children}
    </CartContext.Provider>
  );
};