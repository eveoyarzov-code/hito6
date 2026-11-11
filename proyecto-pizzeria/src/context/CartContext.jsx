import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [pizzas, setPizzas] = useState([]);

 
  useEffect(() => {
    const getPizzas = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas");
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error("Error al obtener las pizzas de la API:", error);
      }
    };
    getPizzas();
  }, []);

 
  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const existingPizza = prevCart.find((item) => item.id === pizza.id);
      if (existingPizza) {
        return prevCart.map((item) =>
          item.id === pizza.id ? { ...item, count: item.count + 1 } : item
        );
      }
      return [...prevCart, { ...pizza, count: 1 }];
    });
  };

 
  const increaseCount = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  
  const decreaseCount = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      ).filter((item) => item.count > 0)
    );
  };

 
  const totalCart = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        pizzas,
        addToCart,
        increaseCount,
        decreaseCount,
        totalCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
